<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__ . '/config/config.php';  

// Verificar que las variables de entorno se cargaron
echo "Variables de entorno:<br>";
echo "DB_HOST: " . (isset($_ENV['DB_HOST']) ? $_ENV['DB_HOST'] : 'no definido') . "<br>";
echo "DB_NAME: " . (isset($_ENV['DB_NAME']) ? $_ENV['DB_NAME'] : 'no definido') . "<br>";
echo "DB_USER: " . (isset($_ENV['DB_USER']) ? $_ENV['DB_USER'] : 'no definido') . "<br>";
echo "DB_PASS: " . (isset($_ENV['DB_PASS']) ? '[presente]' : 'no definido') . "<br>";

try {
    $dsn = sprintf(
        "mysql:host=%s;dbname=%s;charset=utf8mb4",
        $_ENV['DB_HOST'],
        $_ENV['DB_NAME']
    );
    
    echo "<br>Conectando a MySQL...<br>";
    $conn = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "¡Conexión exitosa!<br>";
} catch(PDOException $e) {
    echo "Error de conexión: " . $e->getMessage() . "<br>";
    echo "Código de error: " . $e->getCode() . "<br>";
}
