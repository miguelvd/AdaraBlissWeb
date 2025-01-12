<?php
require_once __DIR__ . '/config/config.php';

header('Content-Type: application/json');

try {
    // Agregar las columnas faltantes
    $alterTableSQL = [
        "ALTER TABLE promotions ADD COLUMN IF NOT EXISTS discountLabel varchar(100) DEFAULT NULL AFTER discount",
        "ALTER TABLE promotions ADD COLUMN IF NOT EXISTS icon varchar(50) DEFAULT 'Sparkles' AFTER discountLabel"
    ];

    $success = true;
    $messages = [];

    foreach ($alterTableSQL as $sql) {
        try {
            $conn->exec($sql);
            $messages[] = "Ejecutado exitosamente: $sql";
        } catch (PDOException $e) {
            $messages[] = "Error en SQL ($sql): " . $e->getMessage();
            $success = false;
        }
    }

    echo json_encode([
        'success' => $success,
        'messages' => $messages
    ], JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al actualizar la tabla: ' . $e->getMessage()
    ]);
}
