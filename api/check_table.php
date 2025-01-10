<?php
require_once __DIR__ . '/config/config.php';

header('Content-Type: application/json');

try {
    // Verificar si la tabla existe
    $stmt = $conn->query("SHOW TABLES LIKE 'promotions'");
    $tableExists = $stmt->rowCount() > 0;

    if ($tableExists) {
        // Obtener la estructura de la tabla
        $stmt = $conn->query("DESCRIBE promotions");
        $structure = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Obtener la cantidad de registros
        $stmt = $conn->query("SELECT COUNT(*) as count FROM promotions");
        $count = $stmt->fetch(PDO::FETCH_ASSOC)['count'];

        echo json_encode([
            'exists' => true,
            'structure' => $structure,
            'record_count' => $count
        ], JSON_PRETTY_PRINT);
    } else {
        // Si la tabla no existe, mostrar el SQL para crearla
        $createTableSQL = "
CREATE TABLE promotions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    originalPrice DECIMAL(10,2),
    discountPrice DECIMAL(10,2),
    discount VARCHAR(50),
    discountLabel VARCHAR(100),
    icon VARCHAR(50),
    image VARCHAR(255),
    startDate DATE,
    endDate DATE,
    showPrices BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";
        
        echo json_encode([
            'exists' => false,
            'create_table_sql' => $createTableSQL
        ], JSON_PRETTY_PRINT);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al verificar la tabla: ' . $e->getMessage()
    ]);
}
