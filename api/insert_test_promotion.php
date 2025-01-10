<?php
require_once __DIR__ . '/config/config.php';

header('Content-Type: application/json');

try {
    $sql = "INSERT INTO promotions (
        title,
        description,
        originalPrice,
        discountPrice,
        discount,
        discountLabel,
        icon,
        image,
        startDate,
        endDate,
        showPrices
    ) VALUES (
        'Promoción de Lanzamiento',
        'Disfruta de un 20% de descuento en tu primer tratamiento',
        1000.00,
        800.00,
        '20%',
        'Oferta Especial',
        'Star',
        'https://adarabliss.com/images/promo1.jpg',
        '2025-01-01',
        '2025-12-31',
        true
    )";

    $stmt = $conn->exec($sql);
    
    echo json_encode([
        'success' => true,
        'message' => 'Promoción de prueba insertada correctamente'
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al insertar promoción de prueba: ' . $e->getMessage()
    ]);
}
