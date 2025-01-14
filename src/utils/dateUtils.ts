export const formatDate = (dateString: string) => {
    // Crear la fecha en UTC
    const date = new Date(dateString + 'T12:00:00Z');
    
    // Ajustar la fecha a la zona horaria de México
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Mexico_City',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    
    return new Intl.DateTimeFormat('es-MX', options).format(date);
};
