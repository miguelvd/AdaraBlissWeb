<?php
require_once 'config.php';

// Validación de seguridad básica
function validateRequest() {
    $allowedOrigins = [
        'http://localhost:3000',
        'https://adarabliss.com'
    ];
    
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    $isAllowed = false;
    
    foreach ($allowedOrigins as $origin) {
        if (str_starts_with($referer, $origin)) {
            $isAllowed = true;
            break;
        }
    }
    
    if (!$isAllowed) {
        http_response_code(403);
        echo json_encode(['error' => 'Acceso no autorizado']);
        exit;
    }
}

// Obtener todas las promociones
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    validateRequest();
    try {
        $stmt = $pdo->query('SELECT * FROM promotions ORDER BY created_at DESC');
        echo json_encode($stmt->fetchAll());
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Error al obtener las promociones']);
    }
}

// Actualizar una promoción
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    validateRequest();
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Validación básica de datos
        if (!isset($data['id']) || !isset($data['title']) || !isset($data['description'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Datos incompletos']);
            exit;
        }
        
        $stmt = $pdo->prepare('UPDATE promotions SET 
            title = ?, 
            description = ?, 
            originalPrice = ?, 
            discountPrice = ?, 
            discount = ?, 
            image = ?, 
            startDate = ?, 
            endDate = ?, 
            showPrices = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?');
            
        $result = $stmt->execute([
            $data['title'],
            $data['description'],
            $data['originalPrice'],
            $data['discountPrice'],
            $data['discount'],
            $data['image'],
            $data['startDate'],
            $data['endDate'],
            $data['showPrices'] ? 1 : 0,
            $data['id']
        ]);
        
        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            throw new Exception('Error al actualizar la promoción');
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Error al actualizar la promoción']);
    }
}
