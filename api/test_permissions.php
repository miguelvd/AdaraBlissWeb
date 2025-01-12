<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$uploadDir = '/home/u870454566/domains/adarabliss.com/public_html/images/promotions/';

// Información del script
$scriptInfo = [
    'script_user' => get_current_user(),
    'script_uid' => getmyuid(),
    'script_gid' => getmygid(),
    'script_path' => __DIR__,
];

// Información del directorio de subida
$dirInfo = [
    'exists' => file_exists($uploadDir),
    'is_dir' => is_dir($uploadDir),
    'is_writable' => is_writable($uploadDir),
    'owner' => function_exists('posix_getpwuid') ? posix_getpwuid(fileowner($uploadDir)) : null,
    'group' => function_exists('posix_getgrgid') ? posix_getgrgid(filegroup($uploadDir)) : null,
    'perms' => substr(sprintf('%o', fileperms($uploadDir)), -4),
    'full_path' => realpath($uploadDir),
];

// Intentar crear un archivo de prueba
$testFile = $uploadDir . 'test_' . uniqid() . '.txt';
$writeTest = [
    'can_write' => false,
    'error' => null,
];

try {
    $content = 'Test file - ' . date('Y-m-d H:i:s');
    if (file_put_contents($testFile, $content)) {
        $writeTest['can_write'] = true;
        // Leer el contenido para verificar
        $readContent = file_get_contents($testFile);
        $writeTest['content_matches'] = $content === $readContent;
        // Eliminar el archivo de prueba
        unlink($testFile);
    }
} catch (Exception $e) {
    $writeTest['error'] = $e->getMessage();
}

// Información del sistema
$systemInfo = [
    'php_version' => PHP_VERSION,
    'os' => PHP_OS,
    'sapi' => php_sapi_name(),
    'memory_limit' => ini_get('memory_limit'),
    'upload_max_filesize' => ini_get('upload_max_filesize'),
    'post_max_size' => ini_get('post_max_size'),
    'max_execution_time' => ini_get('max_execution_time'),
];

// Devolver toda la información
echo json_encode([
    'script' => $scriptInfo,
    'directory' => $dirInfo,
    'write_test' => $writeTest,
    'system' => $systemInfo,
], JSON_PRETTY_PRINT);
