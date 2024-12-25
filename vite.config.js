import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base URL
  build: {
    outDir: 'dist' // Output folder for Vercel
  }
});
