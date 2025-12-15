import { defineConfig } from 'vite';


export default defineConfig({
  // Настройки сервера разработки
  server: {
    port: 3000,           // Порт (по умолчанию 5173)
    open: true,           // Автоматически открывать браузер при запуске
    host: 'localhost',  // Хост
  },

  // Настройка путей сборки
  build: {
    outDir: 'dist',     // Куда складывать сборку (по умолчанию 'dist')
    assetsDir: 'assets' // Подпапка для статики (по умолчанию 'assets')
  },

  // Работа с CSS
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$primary: #007bff;`, // Глобальные переменные Sass
      },
    },
  },
});
