<?php
// Configurar cabeceras CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// Obtener la ruta de la imagen desde la URL
$imagePath = isset($_GET['path']) ? $_GET['path'] : '';

// Ruta base donde se almacenan las imágenes
$baseDir = '/home/u870454566/domains/adarabliss.com/public_html/images/';

// Limpiar y validar la ruta
$imagePath = str_replace('..', '', $imagePath); // Prevenir directory traversal
$fullPath = $baseDir . $imagePath;

// Verificar si el archivo existe
if (!file_exists($fullPath)) {
    http_response_code(404);
    exit('Imagen no encontrada');
}

// Obtener el tipo MIME del archivo
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $fullPath);
finfo_close($finfo);

// Verificar si es una imagen
if (!in_array($mimeType, ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'])) {
    http_response_code(400);
    exit('Tipo de archivo no válido');
}

// Establecer el tipo de contenido correcto
header('Content-Type: ' . $mimeType);
header('Content-Length: ' . filesize($fullPath));

// Servir la imagen
readfile($fullPath);
