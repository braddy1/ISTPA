<?php
// Ruta a la carpeta donde se encuentran los documentos
$carpetaDocumentos = '/assets/documents/';

// Obtén el nombre del archivo solicitado
$archivo = $_GET['archivo'];

// Verifica que el archivo exista y sea un archivo PDF
if (file_exists($carpetaDocumentos . $archivo) && pathinfo($archivo, PATHINFO_EXTENSION) === 'pdf') {
    // Configura las cabeceras para mostrar el archivo PDF en el navegador
    header('Content-Type: application/pdf');
    header('Content-Disposition: inline; filename="' . $archivo . '"');
    header('Content-Length: ' . filesize($carpetaDocumentos . $archivo));

    // Lee el archivo y envíalo al navegador
    readfile($carpetaDocumentos . $archivo);
} else {
    // Archivo no encontrado o no es un archivo PDF válido
    echo 'Archivo no encontrado.';
}
?>