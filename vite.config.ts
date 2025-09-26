import { defineConfig } from 'vite';

export default defineConfig({
  // Basic Vite configuration for plain HTML/CSS/JS project
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 8080
  }
});