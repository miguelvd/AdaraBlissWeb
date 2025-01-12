<?php
require_once __DIR__ . '/config/config.php';

header('Content-Type: application/json');

try {
    // Crear el directorio si no existe
    $imageDir = __DIR__ . '/../public/images';
    if (!file_exists($imageDir)) {
        mkdir($imageDir, 0755, true);
    }

    // Crear una imagen por defecto simple
    $width = 800;
    $height = 600;
    $image = imagecreatetruecolor($width, $height);

    // Colores
    $pink = imagecolorallocate($image, 242, 90, 163); // #F25AA3
    $white = imagecolorallocate($image, 255, 255, 255);

    // Rellenar el fondo con el color rosa
    imagefill($image, 0, 0, $pink);

    // Dibujar un patrón simple
    for ($i = 0; $i < $width; $i += 50) {
        for ($j = 0; $j < $height; $j += 50) {
            imagefilledrectangle($image, $i, $j, $i + 40, $j + 40, $white);
        }
    }

    // Guardar la imagen
    $filename = $imageDir . '/default-promo.jpg';
    imagejpeg($image, $filename, 90);
    imagedestroy($image);

    // Verificar que la imagen se creó correctamente
    if (file_exists($filename)) {
        chmod($filename, 0644); // Asegurar permisos correctos
        echo json_encode([
            'success' => true,
            'message' => 'Imagen por defecto creada correctamente',
            'path' => '/images/default-promo.jpg',
            'size' => filesize($filename)
        ]);
    } else {
        throw new Exception('No se pudo crear el archivo de imagen');
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al crear la imagen por defecto: ' . $e->getMessage(),
        'details' => [
            'php_version' => PHP_VERSION,
            'gd_info' => gd_info()
        ]
    ]);
}
