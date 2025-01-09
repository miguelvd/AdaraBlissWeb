const isDevelopment = process.env.NODE_ENV === 'development';

export const config = {
  apiUrl: isDevelopment 
    ? 'http://localhost:3000/api' 
    : 'https://adarabliss.com/api',
  isDevelopment
};
