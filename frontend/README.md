# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Creación:
cd frontend
npm create vite@latest . -- --template react
npm install
npm install axios @mui/material@5.15.5 @emotion/react@11.11.3 @emotion/styled@11.11.0 @mui/icons-material@5.15.5

# Limpieza de caché en caso:
npm cache clean --force

npm install --registry https://registry.npmjs.com

# Ejecutar la app:
npm run dev
