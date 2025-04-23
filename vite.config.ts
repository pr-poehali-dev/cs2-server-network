import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      // Позволяет HMR работать через прокси
      clientPort: 443,
      host: 'preview--cs2-server-network.poehali.dev',
      protocol: 'wss',
      overlay: false // Отключает наложение ошибок, показывая их только в консоли
    }
  },
});
