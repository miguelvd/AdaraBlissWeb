<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$info = [
    'gd_info' => function_exists('gd_info') ? gd_info() : 'GD no está instalado',
    'jpeg_support' => function_exists('imagejpeg'),
    'png_support' => function_exists('imagepng'),
    'gif_support' => function_exists('imagegif'),
    'image_types' => function_exists('imagetypes') ? imagetypes() : 'No disponible',
    'php_version' => PHP_VERSION,
    'memory_limit' => ini_get('memory_limit'),
    'upload_max_filesize' => ini_get('upload_max_filesize'),
    'post_max_size' => ini_get('post_max_size'),
    'max_execution_time' => ini_get('max_execution_time'),
];

// Intentar crear y manipular una imagen JPG
$jpegTest = [
    'can_create' => false,
    'error' => null
];

try {
    $im = @imagecreatetruecolor(50, 50);
    if ($im) {
        $jpegTest['can_create'] = true;
        // Intentar guardar como JPEG
        $testFile = '/tmp/test.jpg';
        if (@imagejpeg($im, $testFile)) {
            $jpegTest['can_save'] = true;
            unlink($testFile);
        } else {
            $jpegTest['can_save'] = false;
            $jpegTest['save_error'] = error_get_last();
        }
        imagedestroy($im);
    } else {
        $jpegTest['error'] = error_get_last();
    }
} catch (Exception $e) {
    $jpegTest['error'] = $e->getMessage();
}

$info['jpeg_test'] = $jpegTest;

echo json_encode($info, JSON_PRETTY_PRINT);
