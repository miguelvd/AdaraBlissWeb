<?php

class RateLimiter {
    private $storageDir;
    private $requestsPerMinute;
    private $requestsPerHour;

    public function __construct($storageDir = null) {
        $this->storageDir = $storageDir ?: __DIR__ . '/logs/rate_limits';
        $this->requestsPerMinute = getenv('RATE_LIMIT_PER_MINUTE') ?: 60;
        $this->requestsPerHour = getenv('RATE_LIMIT_PER_HOUR') ?: 1000;
        
        if (!file_exists($this->storageDir)) {
            mkdir($this->storageDir, 0755, true);
        }
    }

    private function cleanOldRecords() {
        $files = glob($this->storageDir . '/*');
        $now = time();
        foreach ($files as $file) {
            if ($now - filemtime($file) > 3600) { // Eliminar registros más antiguos de 1 hora
                @unlink($file);
            }
        }
    }

    public function isAllowed($ip) {
        $this->cleanOldRecords();
        
        $minuteFile = $this->storageDir . '/' . md5($ip . '_minute');
        $hourFile = $this->storageDir . '/' . md5($ip . '_hour');
        
        // Verificar límite por minuto
        $minuteCount = $this->incrementCounter($minuteFile, 60);
        if ($minuteCount > $this->requestsPerMinute) {
            return false;
        }
        
        // Verificar límite por hora
        $hourCount = $this->incrementCounter($hourFile, 3600);
        if ($hourCount > $this->requestsPerHour) {
            return false;
        }
        
        return true;
    }

    private function incrementCounter($file, $ttl) {
        $now = time();
        $count = 1;
        
        if (file_exists($file)) {
            $data = @json_decode(file_get_contents($file), true) ?: [];
            if ($now - ($data['timestamp'] ?? 0) < $ttl) {
                $count = ($data['count'] ?? 0) + 1;
            }
        }
        
        file_put_contents($file, json_encode([
            'count' => $count,
            'timestamp' => $now
        ]));
        
        return $count;
    }

    public function getRemainingAttempts($ip) {
        $minuteFile = $this->storageDir . '/' . md5($ip . '_minute');
        $hourFile = $this->storageDir . '/' . md5($ip . '_hour');
        
        $minuteCount = 0;
        $hourCount = 0;
        
        if (file_exists($minuteFile)) {
            $data = @json_decode(file_get_contents($minuteFile), true) ?: [];
            if (time() - ($data['timestamp'] ?? 0) < 60) {
                $minuteCount = $data['count'] ?? 0;
            }
        }
        
        if (file_exists($hourFile)) {
            $data = @json_decode(file_get_contents($hourFile), true) ?: [];
            if (time() - ($data['timestamp'] ?? 0) < 3600) {
                $hourCount = $data['count'] ?? 0;
            }
        }
        
        return [
            'minute' => max(0, $this->requestsPerMinute - $minuteCount),
            'hour' => max(0, $this->requestsPerHour - $hourCount)
        ];
    }
}
