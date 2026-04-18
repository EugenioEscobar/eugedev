# Detener ejecución si hay errores
$ErrorActionPreference = "Stop"

# Ruta del proyecto (puedes dejar "." si estás en la raíz)
$projectPath = "."

# Nombre del zip (puedes personalizarlo)
$zipName = "build.zip"

# Ruta de la carpeta build
$buildPath = Join-Path $projectPath "dist"

# Eliminar build anterior si existe
if (Test-Path $buildPath) {
    Write-Host "Eliminando dist anterior..."
    Remove-Item $buildPath
}

Write-Host "Ejecutando npm run build..."
Set-Location $projectPath
npm run build

# Validar que la carpeta build exista
if (!(Test-Path $buildPath)) {
    Write-Error "No se encontró la carpeta 'dist'."
    exit 1
}

# Eliminar zip anterior si existe
if (Test-Path $zipName) {
    Write-Host "Eliminando zip anterior..."
    Remove-Item $zipName
}

Write-Host "Comprimiendo carpeta build..."
Compress-Archive -Path "$buildPath\*" -DestinationPath $zipName

Write-Host "Proceso completado: generado."