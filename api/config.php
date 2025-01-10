<?php
// Cargar variables de entorno
$envFile = __DIR__ . '/../.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue;
        list($name, $value) = explode('=', $line, 2);
        $_ENV[trim($name)] = trim($value);
        putenv(sprintf('%s=%s', trim($name), trim($value)));
    }
}

// Incluir el Rate Limiter
require_once __DIR__ . '/RateLimiter.php';

// Configuración de CORS
$allowedOriginsStr = getenv('ALLOWED_ORIGINS') ?: 'http://localhost:3000';
$allowedOrigins = explode(',', $allowedOriginsStr);

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Content-Type: application/json');

// Verificar Rate Limiting
$rateLimiter = new RateLimiter();
$clientIP = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

if (!$rateLimiter->isAllowed($clientIP)) {
    http_response_code(429);
    $remaining = $rateLimiter->getRemainingAttempts($clientIP);
    echo json_encode([
        'error' => 'Too Many Requests',
        'message' => 'Please try again later',
        'retry_after' => 60 // segundos
    ]);
    exit;
}

// Configuración de la base de datos
$host = getenv('DB_HOST') ?: 'localhost';
$db   = getenv('DB_NAME') ?: '';
$user = getenv('DB_USER') ?: '';
$pass = getenv('DB_PASS') ?: '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    // Verificar que todas las variables necesarias estén configuradas
    if (empty($db) || empty($user)) {
        throw new Exception('Database configuration is incomplete');
    }
    
    $pdo = new PDO($dsn, $user, $pass, $options);
    
    // Configuración adicional de seguridad en producción
    if (getenv('APP_ENV') === 'production') {
        error_reporting(E_ALL);
        ini_set('display_errors', 'Off');
        ini_set('log_errors', 'On');
        ini_set('error_log', __DIR__ . '/logs/error.log');
        
        // Forzar HTTPS en producción
        if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
            $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            header('HTTP/1.1 301 Moved Permanently');
            header('Location: ' . $redirect);
            exit();
        }
        
        // Headers de seguridad adicionales en producción
        header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");
        header("X-Content-Type-Options: nosniff");
        header("X-Frame-Options: DENY");
        header("X-XSS-Protection: 1; mode=block");
        header("Referrer-Policy: strict-origin-when-cross-origin");
        header("Permissions-Policy: geolocation=(), microphone=(), camera=()");
        
        // Content Security Policy
        $cspHeader = "Content-Security-Policy: ".
            "default-src 'self'; " .
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " .
            "style-src 'self' 'unsafe-inline'; " .
            "img-src 'self' data: https:; " .
            "font-src 'self'; " .
            "connect-src 'self' " . getenv('API_URL') . " " . getenv('FRONTEND_URL');
        header($cspHeader);
    }
} catch (Exception $e) {
    // Log del error (en producción)
    if (getenv('APP_ENV') === 'production') {
        error_log($e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Internal Server Error']);
    } else {
        // En desarrollo, mostrar más detalles
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
    exit;
}
