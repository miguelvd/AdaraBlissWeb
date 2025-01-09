<?php
// Permitir CORS según el entorno
$allowedOrigins = [
    'http://localhost:3000',
    'https://adarabliss.com'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Credenciales de producción para Hostinger
$host = 'localhost'; // Este es el host interno de MySQL en Hostinger
$db   = 'u123456789_adara'; // Tu base de datos en Hostinger
$user = 'u123456789_admin'; // Tu usuario en Hostinger
$pass = 'TuContraseña123!'; // Tu contraseña en Hostinger
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // En producción, no mostrar el mensaje de error detallado
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión a la base de datos']);
    exit;
}
