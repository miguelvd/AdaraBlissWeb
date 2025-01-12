export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Ajustar la fecha a la zona horaria de México
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Mexico_City',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    return date.toLocaleDateString('es-MX', options);
};
