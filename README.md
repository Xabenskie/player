# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      # Минималистичный видеоплеер на React + TypeScript

      ## Описание

      Это простое приложение позволяет загружать локальный видеофайл и воспроизводить его с помощью кастомного видеоплеера. Плеер реализован на React и TypeScript, с минималистичным дизайном и удобным управлением.

      ## Функционал
      - Загрузка локального видеофайла (через input)
      - Кастомные кнопки Play/Pause
      - Прогресс-бар с возможностью перемотки
      - Отображение текущего времени и общей длительности
      - Автоматическая остановка воспроизведения в конце видео

      ## Запуск

      1. Установите зависимости:
        ```bash
        npm install
        ```
      2. Запустите приложение:
        ```bash
        npm run dev
        ```
      3. Откройте браузер и перейдите по адресу, указанному в консоли (обычно http://localhost:5173)

      ## Использование

      1. Нажмите "Выбрать файл" и загрузите видео (mp4).
      2. Управляйте воспроизведением с помощью кнопок и прогресс-бара.

      ## Технологии
      - React
      - TypeScript
      - Vite

      ## Структура проекта
      - `src/video-player.tsx` — основной компонент видеоплеера
      - `src/App.tsx` — точка входа приложения
````
