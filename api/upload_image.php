<?php
require_once __DIR__ . '/config/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Función para redimensionar manteniendo alta calidad
function resizeImage($source, $maxWidth = 2560, $maxHeight = 1440) {
    $width = imagesx($source);
    $height = imagesy($source);
    
    // Si la imagen es más pequeña que el máximo, no la redimensionamos
    if ($width <= $maxWidth && $height <= $maxHeight) {
        return $source;
    }
    
    // Calcular nuevas dimensiones manteniendo aspect ratio
    $ratio = min($maxWidth / $width, $maxHeight / $height);
    $newWidth = round($width * $ratio);
    $newHeight = round($height * $ratio);
    
    // Crear nueva imagen con el modo de color correcto
    $newImage = imagecreatetruecolor($newWidth, $newHeight);
    
    // Configurar la mejor calidad de redimensionamiento
    imagealphablending($newImage, false);
    imagesavealpha($newImage, true);
    
    // Usar el mejor algoritmo de redimensionamiento
    imageantialias($newImage, true);
    
    // Copiar y redimensionar la imagen con el mejor algoritmo
    imagecopyresampled($newImage, $source, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
    
    return $newImage;
}

try {
    // Debug: Información de la solicitud
    $debug = [
        'request_method' => $_SERVER['REQUEST_METHOD'],
        'content_type' => $_SERVER['CONTENT_TYPE'] ?? 'no content type',
        'request_size' => $_SERVER['CONTENT_LENGTH'] ?? 'no content length',
        'memory_limit' => ini_get('memory_limit'),
        'upload_max_filesize' => ini_get('upload_max_filesize'),
        'post_max_size' => ini_get('post_max_size')
    ];

    if (empty($_FILES)) {
        throw new Exception('No se recibió ningún archivo');
    }

    if (!isset($_FILES['image'])) {
        throw new Exception('No se recibió la imagen');
    }

    $file = $_FILES['image'];
    $debug['original_file'] = [
        'name' => $file['name'],
        'type' => $file['type'],
        'size' => $file['size'],
        'error' => $file['error']
    ];

    if ($file['error'] !== UPLOAD_ERR_OK) {
        $errorMessages = [
            UPLOAD_ERR_INI_SIZE => 'El archivo excede el tamaño máximo permitido por PHP',
            UPLOAD_ERR_FORM_SIZE => 'El archivo excede el tamaño máximo permitido por el formulario',
            UPLOAD_ERR_PARTIAL => 'El archivo se subió parcialmente',
            UPLOAD_ERR_NO_FILE => 'No se subió ningún archivo',
            UPLOAD_ERR_NO_TMP_DIR => 'No se encuentra el directorio temporal',
            UPLOAD_ERR_CANT_WRITE => 'Error al escribir el archivo en disco',
            UPLOAD_ERR_EXTENSION => 'Una extensión de PHP detuvo la subida'
        ];
        throw new Exception($errorMessages[$file['error']] ?? 'Error desconocido');
    }

    $fileName = $file['name'];
    $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    if (!in_array($fileType, ['jpg', 'jpeg', 'png'])) {
        throw new Exception('Tipo de archivo no permitido. Use: jpg, jpeg o png');
    }

    // Obtener información de la imagen
    $imageInfo = @getimagesize($file['tmp_name']);
    if ($imageInfo === false) {
        throw new Exception('El archivo no es una imagen válida');
    }

    $debug['image_info'] = [
        'width' => $imageInfo[0],
        'height' => $imageInfo[1],
        'type' => $imageInfo[2],
        'mime' => $imageInfo['mime']
    ];

    // Crear imagen desde el archivo
    $source = null;
    switch ($imageInfo[2]) {
        case IMAGETYPE_JPEG:
            // Configurar la calidad de decodificación JPEG al máximo
            if (function_exists('jpeg_set_quality')) {
                jpeg_set_quality(100);
            }
            $source = @imagecreatefromjpeg($file['tmp_name']);
            break;
        case IMAGETYPE_PNG:
            $source = @imagecreatefrompng($file['tmp_name']);
            break;
        default:
            throw new Exception('Tipo de imagen no soportado');
    }

    if (!$source) {
        throw new Exception('No se pudo crear la imagen');
    }

    // Configurar la mejor calidad de color
    if (function_exists('imagecolorstotal') && imagecolorstotal($source)) {
        imagetruecolortopalette($source, false, 256);
    }

    // Redimensionar si es necesario, manteniendo alta calidad
    $source = resizeImage($source);

    // Generar nombre único y ruta
    $newFileName = uniqid() . '.' . $fileType;
    $uploadDir = '/home/u870454566/domains/adarabliss.com/public_html/images/promotions/';
    $targetPath = $uploadDir . $newFileName;

    // Verificar directorio
    if (!file_exists($uploadDir)) {
        if (!@mkdir($uploadDir, 0755, true)) {
            throw new Exception('No se pudo crear el directorio de destino');
        }
    }

    if (!is_writable($uploadDir)) {
        throw new Exception('No se puede escribir en el directorio de destino');
    }

    // Guardar la imagen con la mejor calidad posible
    $success = false;
    switch ($imageInfo[2]) {
        case IMAGETYPE_JPEG:
            // Para JPEG, usar calidad alta pero con compresión progresiva
            $success = @imagejpeg($source, $targetPath, 92);
            $debug['compression'] = "JPEG quality: 92";
            break;
            
        case IMAGETYPE_PNG:
            // Para PNG, usar compresión moderada para mantener calidad
            imagealphablending($source, false);
            imagesavealpha($source, true);
            $success = @imagepng($source, $targetPath, 6);
            $debug['compression'] = "PNG compression: 6";
            break;
    }

    imagedestroy($source);

    if (!$success) {
        throw new Exception('Error al guardar la imagen');
    }

    // Verificar el archivo final
    if (!file_exists($targetPath) || !is_readable($targetPath)) {
        throw new Exception('Error al verificar el archivo guardado');
    }

    // Obtener tamaño final
    $finalSize = filesize($targetPath);
    $debug['final_size'] = $finalSize;

    // Devolver URL
    $imageUrl = '/api/serve_image.php?path=promotions/' . $newFileName;
    echo json_encode([
        'success' => true,
        'url' => $imageUrl,
        'fileName' => $newFileName,
        'debug' => $debug
    ]);

} catch (Exception $e) {
    error_log("Error en upload_image.php: " . $e->getMessage());
    http_response_code(422);
    echo json_encode([
        'error' => $e->getMessage(),
        'details' => [
            'message' => $e->getMessage(),
            'debug' => $debug ?? []
        ]
    ]);
}
