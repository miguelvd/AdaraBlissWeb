#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Función para imprimir mensajes
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Verificar si se está ejecutando como root
if [ "$EUID" -ne 0 ]; then 
    print_error "Este script debe ejecutarse como root"
    exit 1
fi

# Detectar el servidor web instalado
if command -v apache2 &> /dev/null; then
    WEB_SERVER="apache2"
elif command -v nginx &> /dev/null; then
    WEB_SERVER="nginx"
else
    print_error "No se encontró Apache ni Nginx instalado"
    exit 1
fi

print_message "Servidor web detectado: $WEB_SERVER"

# Crear directorios necesarios
print_message "Creando directorios..."
mkdir -p /var/www/adarabliss/{dist,api,logs}
mkdir -p /var/www/adarabliss/api/logs/rate_limits

# Configurar permisos
print_message "Configurando permisos..."
chown -R www-data:www-data /var/www/adarabliss
chmod -R 755 /var/www/adarabliss
chmod -R 775 /var/www/adarabliss/api/logs

# Solicitar información del certificado SSL
read -p "Ruta del certificado SSL (.crt): " SSL_CERT
read -p "Ruta de la clave privada SSL (.key): " SSL_KEY

if [ ! -f "$SSL_CERT" ] || [ ! -f "$SSL_KEY" ]; then
    print_error "No se encontraron los archivos del certificado SSL"
    exit 1
fi

# Configurar el servidor web
if [ "$WEB_SERVER" = "apache2" ]; then
    print_message "Configurando Apache..."
    
    # Habilitar módulos necesarios
    a2enmod ssl
    a2enmod rewrite
    a2enmod headers
    a2enmod proxy_fcgi
    
    # Copiar y configurar el archivo de configuración
    sed "s|\${SSL_CERTIFICATE}|$SSL_CERT|g; s|\${SSL_PRIVATE_KEY}|$SSL_KEY|g" apache.conf > /etc/apache2/sites-available/adarabliss.conf
    
    # Habilitar el sitio
    a2ensite adarabliss.conf
    
    # Reiniciar Apache
    systemctl restart apache2
    
elif [ "$WEB_SERVER" = "nginx" ]; then
    print_message "Configurando Nginx..."
    
    # Copiar y configurar el archivo de configuración
    sed "s|\${SSL_CERTIFICATE}|$SSL_CERT|g; s|\${SSL_PRIVATE_KEY}|$SSL_KEY|g" nginx.conf > /etc/nginx/sites-available/adarabliss
    
    # Crear enlace simbólico
    ln -sf /etc/nginx/sites-available/adarabliss /etc/nginx/sites-enabled/
    
    # Verificar la configuración
    nginx -t
    
    # Reiniciar Nginx
    systemctl restart nginx
fi

# Verificar PHP-FPM
if ! systemctl is-active --quiet php8.2-fpm; then
    print_warning "PHP-FPM no está activo. Intentando iniciar..."
    systemctl start php8.2-fpm
fi

print_message "¡Configuración completada!"
print_message "No olvides:"
print_message "1. Configurar las variables de entorno en el archivo .env"
print_message "2. Construir la aplicación React con 'npm run build'"
print_message "3. Copiar los archivos de la aplicación a /var/www/adarabliss/dist"
print_message "4. Copiar los archivos de la API a /var/www/adarabliss/api"
