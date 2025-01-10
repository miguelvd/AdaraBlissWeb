#!/bin/bash

# Configuración
BACKUP_DIR="/var/backups/adarabliss"
MYSQL_USER="u123456789_admin"
MYSQL_DATABASE="u123456789_adara"
WEBSITE_DIR="/var/www/adarabliss"
DATE=$(date +%Y-%m-%d_%H-%M-%S)

# Crear directorio de backup si no existe
mkdir -p "$BACKUP_DIR"

# Backup de la base de datos
mysqldump --no-tablespaces -u "$MYSQL_USER" -p "$MYSQL_DATABASE" > "$BACKUP_DIR/db_backup_$DATE.sql"

# Comprimir archivos del sitio
tar -czf "$BACKUP_DIR/files_backup_$DATE.tar.gz" "$WEBSITE_DIR"

# Mantener solo los últimos 7 días de backups
find "$BACKUP_DIR" -type f -name "*.sql" -mtime +7 -delete
find "$BACKUP_DIR" -type f -name "*.tar.gz" -mtime +7 -delete

# Registrar el backup
echo "Backup completado: $DATE" >> "$BACKUP_DIR/backup.log"
