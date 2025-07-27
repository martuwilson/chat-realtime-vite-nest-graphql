# Chat Realtime Full Stack 💬

Una aplicación de chat en tiempo real construida con **React + NestJS + GraphQL + MongoDB**, diseñada para escalabilidad y desarrollo moderno.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![NestJS](https://img.shields.io/badge/NestJS-Latest-E0234E?style=flat&logo=nestjs)
![GraphQL](https://img.shields.io/badge/GraphQL-Latest-E10098?style=flat&logo=graphql)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)
![Material-UI](https://img.shields.io/badge/Material--UI-7.2.0-0081CB?style=flat&logo=mui)
![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?style=flat&logo=docker)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite)

## 🚀 Características

### Frontend (React + TypeScript)
- ⚡ **Desarrollo rápido** con Vite y Hot Module Replacement (HMR)
- 🎨 **Interfaz moderna** con Material-UI y tema oscuro
- 📱 **Diseño responsivo** que se adapta a cualquier dispositivo
- 🔧 **TypeScript** para un desarrollo más seguro y mantenible

### Backend (NestJS + GraphQL)
- 🚀 **API GraphQL** para consultas eficientes y flexibles
- 🔒 **Arquitectura modular** con NestJS
- 🔄 **Tiempo real** con subscripciones GraphQL
- 📊 **Base de datos MongoDB** con Docker

### DevOps & Tooling
- 🐳 **Docker** para desarrollo y producción
- 🛠️ **Docker Compose** para orquestación de servicios
- 🎯 **ESLint & Prettier** para calidad de código
- 📝 **Mongo Express** para administración de base de datos

## 🛠️ Stack tecnológico

### Frontend
- **React 19.1.0** - Biblioteca para construir interfaces de usuario
- **TypeScript 5.8.3** - Superset tipado de JavaScript
- **Material-UI 7.2.0** - Componentes de interfaz de usuario
- **Vite 7.0.4** - Herramienta de construcción y desarrollo
- **Emotion** - Biblioteca CSS-in-JS para estilización

### Backend
- **NestJS** - Framework de Node.js para APIs escalables
- **GraphQL** - Lenguaje de consultas para APIs flexibles
- **TypeScript** - Desarrollo tipado y seguro
- **Class Validator** - Validación de datos

### Base de datos
- **MongoDB 7.0** - Base de datos NoSQL orientada a documentos
- **Mongo Express** - Interfaz web para administración de MongoDB

### DevOps
- **Docker & Docker Compose** - Containerización y orquestación
- **ESLint & Prettier** - Linting y formateo de código

## 📦 Instalación y configuración

### Prerrequisitos
- **Node.js** (v16 o superior)
- **Docker Desktop** (para la base de datos)
- **Git**

### 🚀 Inicio rápido

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/martuwilson/chat-realtime-vite-nest-graphql.git
   cd chat-realtime-vite-nest-graphql
   ```

2. **Instala todas las dependencias**
   ```bash
   npm run install:all
   ```

3. **Inicia el entorno completo de desarrollo**
   ```bash
   npm run dev
   ```

   Este comando iniciará automáticamente:
   - 🗄️ MongoDB (puerto 27017)
   - 🖥️ Mongo Express (puerto 8081)
   - 🚀 API NestJS (puerto 3000)
   - ⚛️ App React (puerto 5173)

4. **Accede a las aplicaciones**
   - **Frontend**: http://localhost:5173
   - **Backend GraphQL**: http://localhost:3000/graphql
   - **Admin de BD**: http://localhost:8081

### 🔧 Configuración manual por pasos

Si prefieres iniciar los servicios individualmente:

1. **Base de datos**
   ```bash
   npm run db:up          # Inicia MongoDB
   npm run db:admin       # Inicia Mongo Express (opcional)
   ```

2. **Backend**
   ```bash
   cd chatter-backend
   npm install
   npm run start:dev
   ```

3. **Frontend**
   ```bash
   cd chatter-ui
   npm install
   npm run dev
   ```

## 🏃‍♂️ Scripts disponibles

### Scripts principales
- `npm run dev` - Inicia todo el stack de desarrollo (BD + Backend + Frontend)
- `npm run install:all` - Instala dependencias en todos los proyectos

### Scripts de base de datos
- `npm run db:up` - Inicia MongoDB en Docker
- `npm run db:down` - Detiene todos los contenedores
- `npm run db:restart` - Reinicia MongoDB
- `npm run db:logs` - Muestra logs de MongoDB
- `npm run db:admin` - Inicia Mongo Express (interfaz web)

### Scripts por proyecto

#### Frontend (chatter-ui)
- `npm run dev:ui` - Solo el frontend React
- `cd chatter-ui && npm run build` - Build de producción
- `cd chatter-ui && npm run preview` - Preview de la build
- `cd chatter-ui && npm run lint` - Linting del frontend

#### Backend (chatter-backend)
- `npm run dev:api` - Solo el backend NestJS
- `cd chatter-backend && npm run build` - Build del backend
- `cd chatter-backend && npm run test` - Tests del backend

## 📁 Estructura del proyecto

```
chat-realtime-vite-nest-graphql/
├── 📁 chatter-ui/              # Frontend React + TypeScript
│   ├── public/                 # Archivos estáticos
│   ├── src/
│   │   ├── assets/            # Recursos (imágenes, iconos)
│   │   ├── App.tsx            # Componente principal
│   │   ├── App.css            # Estilos globales
│   │   ├── main.tsx           # Punto de entrada
│   │   └── vite-env.d.ts      # Tipos de Vite
│   ├── package.json           # Dependencias del frontend
│   ├── tsconfig.json          # Config TypeScript
│   ├── vite.config.ts         # Config Vite
│   └── README.md              # Docs del frontend
│
├── 📁 chatter-backend/         # Backend NestJS + GraphQL
│   ├── src/
│   │   ├── app.controller.ts  # Controlador principal
│   │   ├── app.module.ts      # Módulo raíz
│   │   ├── app.service.ts     # Servicio principal
│   │   └── main.ts            # Punto de entrada
│   ├── test/                  # Tests del backend
│   ├── package.json           # Dependencias del backend
│   ├── nest-cli.json          # Config NestJS
│   ├── tsconfig.json          # Config TypeScript
│   └── README.md              # Docs del backend
│
├── 🐳 docker-compose.yml       # Orquestación de contenedores
├── 🗄️ init-mongo.js           # Script de inicialización de BD
├── 📋 DOCKER.md               # Documentación de Docker
├── 📦 package.json            # Scripts y deps del monorepo
├── 🚫 .gitignore              # Archivos ignorados por Git
└── 📖 README.md               # Este archivo
```

## 🐳 Docker y base de datos

Este proyecto utiliza **Docker** para gestionar MongoDB de forma sencilla y consistente.

### Configuración de MongoDB
- **Puerto**: 27017
- **Base de datos**: chatter
- **Usuario**: chatter_user
- **Contraseña**: chatter_password

### Mongo Express (Interfaz web)
- **URL**: http://localhost:8081
- **Usuario admin**: admin
- **Contraseña admin**: pass

### Variables de entorno
El proyecto está configurado para funcionar sin variables de entorno adicionales. La configuración de Docker está en `docker-compose.yml` y la inicialización de la base de datos en `init-mongo.js`.

Para más detalles sobre Docker, consulta [DOCKER.md](./DOCKER.md).

## 🔗 Conexiones API

### GraphQL Playground
Accede al playground de GraphQL en: http://localhost:3000/graphql

### Conexión a MongoDB
```typescript
// String de conexión para el backend
mongodb://chatter_user:chatter_password@localhost:27017/chatter
```

## 🎨 Personalización

### Frontend (Material-UI)
La aplicación utiliza Material-UI con un tema oscuro personalizado. Puedes modificar los colores y estilos en `chatter-ui/src/App.tsx`:

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

### Backend (NestJS)
El backend utiliza una arquitectura modular. Puedes agregar nuevos módulos, servicios y resolvers GraphQL en la carpeta `chatter-backend/src/`.

## 🚨 Solución de problemas

### Puerto ya en uso
Si encuentras errores de puertos ocupados:
```bash
npm run db:down  # Detiene todos los contenedores
```

### Reiniciar base de datos
```bash
npm run db:restart
```

### Ver logs de MongoDB
```bash
npm run db:logs
```

### Limpiar contenedores Docker (caso extremo)
```bash
docker system prune -a
```

## 🤝 Contribución
1. Fork el proyecto
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Martin Wilson** - [@martuwilson](https://github.com/martuwilson)

---

## 🔧 Desarrollo avanzado

### Agregar nuevas funcionalidades GraphQL
1. Crea resolvers en `chatter-backend/src/`
2. Define esquemas GraphQL
3. Actualiza el frontend para consumir las nuevas queries/mutations

### Configuración de producción
- Variables de entorno para MongoDB production
- Build de Docker para deploy
- Configuración de CORS para dominios específicos

### Testing
```bash
# Tests del backend
cd chatter-backend && npm run test

# Tests del frontend  
cd chatter-ui && npm run test
```
