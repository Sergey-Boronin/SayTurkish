# Say Turkish

Локальный MVP мобильного приложения-фразника для бытовых ситуаций в Турции.

Главная идея: не учить язык, а быстро решить задачу. Приложение сразу открывается в рабочем интерфейсе, показывает бытовые категории и даёт фразы для такси с турецким текстом, переводом, транскрипцией с ударением, озвучкой, копированием и крупным режимом показа собеседнику.

## Стек

- React
- TypeScript
- Vite
- Tailwind CSS
- vite-plugin-pwa
- SpeechSynthesis API

## Запуск

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## PWA

PWA настроена через `vite-plugin-pwa`: manifest, installable metadata и precache основных файлов генерируются при `npm run build`. После первого открытия production-версии основной интерфейс и локальные фразы доступны offline.

## Деплой

Проект полностью клиентский и готов для Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
