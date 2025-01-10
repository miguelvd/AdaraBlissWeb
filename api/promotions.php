<?php
require_once __DIR__ . '/config/config.php';

// Asegurar que la respuesta siempre sea JSON
header('Content-Type: application/json');

// Manejo de errores personalizado
function handleError($errno, $errstr, $errfile, $errline) {
    http_response_code(500);
    echo json_encode(['error' => 'Error interno del servidor']);
    exit;
}
set_error_handler('handleError');

// Validación de seguridad básica
function validateRequest() {
    $allowedOrigins = explode(',', $_ENV['ALLOWED_ORIGINS']);
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    
    if (in_array($origin, $allowedOrigins)) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
    } else {
        http_response_code(403);
        echo json_encode(['error' => 'Acceso no autorizado']);
        exit;
    }
}

// Manejar preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    validateRequest();
    exit;
}

// Obtener todas las promociones
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    validateRequest();
    try {
        $stmt = $conn->query('SELECT * FROM promotions ORDER BY created_at DESC');
        $promotions = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['data' => $promotions]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Error al obtener las promociones: ' . $e->getMessage()]);
    }
}

// Crear una nueva promoción
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    validateRequest();
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
        http_response_code(500);
        echo json_encode(['error' => 'Error al crear la promoción: ' . $e->getMessage()]);
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
        http_response_code(500);
        echo json_encode(['error' => 'Error al actualizar la promoción']);
    }
}

// Eliminar una promoción
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    validateRequest();
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
        http_response_code(500);
        echo json_encode(['error' => 'Error al eliminar la promoción']);
    }
}
