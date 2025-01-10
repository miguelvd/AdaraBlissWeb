<?php
require_once __DIR__ . '/config/config.php';

// Habilitar CORS para todos los endpoints
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Content-Type: application/json');

// Si es una solicitud OPTIONS, terminar aquí
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Manejo de errores personalizado
function handleError($errno, $errstr, $errfile, $errline) {
    error_log("Error: [$errno] $errstr in $errfile on line $errline");
    http_response_code(500);
    echo json_encode(['error' => 'Error interno del servidor']);
    exit;
}
set_error_handler('handleError');

// Obtener todas las promociones
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $conn->query('SELECT * FROM promotions ORDER BY created_at DESC');
        $promotions = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['data' => $promotions]);
    } catch (PDOException $e) {
        error_log("Error de base de datos: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Error al obtener las promociones: ' . $e->getMessage()]);
    }
}

// Crear una nueva promoción
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Validación básica de datos
        if (!isset($data['title']) || !isset($data['description'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Datos incompletos']);
            exit;
        }
        
        $stmt = $conn->prepare('INSERT INTO promotions (
            title, 
            description, 
            originalPrice, 
            discountPrice, 
            discount, 
            image, 
            startDate, 
            endDate, 
            showPrices,
            created_at,
            updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)');
            
        $result = $stmt->execute([
            $data['title'],
            $data['description'],
            $data['originalPrice'] ?? 0,
            $data['discountPrice'] ?? 0,
            $data['discount'] ?? '',  
            $data['image'] ?? '',
            $data['startDate'] ?? date('Y-m-d'),
            $data['endDate'] ?? date('Y-m-d', strtotime('+30 days')),
            isset($data['showPrices']) ? 1 : 0
        ]);
        
        if ($result) {
            $id = $conn->lastInsertId();
            echo json_encode(['success' => true, 'id' => $id]);
        } else {
            throw new Exception('Error al crear la promoción');
        }
    } catch (Exception $e) {
        error_log("Error al crear la promoción: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Error al crear la promoción: ' . $e->getMessage()]);
    }
}

// Actualizar una promoción
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Validación básica de datos
        if (!isset($data['id']) || !isset($data['title']) || !isset($data['description'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Datos incompletos']);
            exit;
        }
        
        $stmt = $conn->prepare('UPDATE promotions SET 
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
        error_log("Error al actualizar la promoción: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Error al actualizar la promoción']);
    }
}

// Eliminar una promoción
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($data['id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'ID no proporcionado']);
            exit;
        }
        
        $stmt = $conn->prepare('DELETE FROM promotions WHERE id = ?');
        $result = $stmt->execute([$data['id']]);
        
        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            throw new Exception('Error al eliminar la promoción');
        }
    } catch (Exception $e) {
        error_log("Error al eliminar la promoción: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Error al eliminar la promoción']);
    }
}
