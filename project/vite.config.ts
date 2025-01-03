import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com;
        font-src 'self' https://fonts.gstatic.com https://fonts.cdnfonts.com;
        img-src 'self' data: https:;
        connect-src 'self' https:;
      `.replace(/\s+/g, ' ').trim()
    }
  }
});
