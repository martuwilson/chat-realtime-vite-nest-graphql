# Chatter UI 💬

Una aplicación de chat en tiempo real construida con React, TypeScript y Material-UI.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)
![Material-UI](https://img.shields.io/badge/Material--UI-7.2.0-0081CB?style=flat&logo=mui)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite)

## 🚀 Características

- ⚡ **Desarrollo rápido** con Vite y Hot Module Replacement (HMR)
- 🎨 **Interfaz moderna** con Material-UI y tema oscuro
- 📱 **Diseño responsivo** que se adapta a cualquier dispositivo
- 🔧 **TypeScript** para un desarrollo más seguro y mantenible
- 🎯 **ESLint** configurado para mantener la calidad del código
- 🌙 **Tema oscuro** por defecto para una mejor experiencia visual

## 🛠️ Tecnologías utilizadas

- **React 19.1.0** - Biblioteca para construir interfaces de usuario
- **TypeScript 5.8.3** - Superset tipado de JavaScript
- **Material-UI 7.2.0** - Componentes de interfaz de usuario
- **Vite 7.0.4** - Herramienta de construcción y desarrollo
- **Emotion** - Biblioteca CSS-in-JS para estilización

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/martuwilson/chat-realtime-vite-nest-graphql.git
   cd realtime-react-nest/chatter-ui
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:5173`

## 🏃‍♂️ Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 📁 Estructura del proyecto

```
chatter-ui/
├── public/               # Archivos estáticos
├── src/
│   ├── assets/          # Recursos (imágenes, iconos)
│   ├── App.tsx          # Componente principal
│   ├── App.css          # Estilos globales
│   ├── main.tsx         # Punto de entrada
│   └── vite-env.d.ts    # Tipos de Vite
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
├── vite.config.ts       # Configuración de Vite
└── README.md           # Este archivo
```

## 🎨 Personalización

La aplicación utiliza Material-UI con un tema oscuro personalizado. Puedes modificar los colores y estilos en `src/App.tsx`:

```tsx
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2', // Azul principal
    },
    secondary: {
      main: '#dc004e', // Rosa secundario
    },
  },
})
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Martin Wilson** - [@martuwilson](https://github.com/martuwilson)

---

## 🔧 Configuración avanzada de ESLint

Si estás desarrollando una aplicación para producción, se recomienda actualizar la configuración para habilitar reglas de lint con conocimiento de tipos:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
