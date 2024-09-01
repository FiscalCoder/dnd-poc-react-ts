import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  json: {
    namedExports: true,
    stringify: false,
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
  }
});
