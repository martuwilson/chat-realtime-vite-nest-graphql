# Chat Realtime Full Stack 💬

Una aplicación de chat en tiempo real construida con **React + NestJS + GraphQL + MongoDB**, diseñada para escalabilidad y desarrollo moderno con **patrones de arquitectura avanzados**.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![NestJS](https://img.shields.io/badge/NestJS-Latest-E0234E?style=flat&logo=nestjs)
![GraphQL](https://img.shields.io/badge/GraphQL-Latest-E10098?style=flat&logo=graphql)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)
![Material-UI](https://img.shields.io/badge/Material--UI-7.2.0-0081CB?style=flat&logo=mui)
![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?style=flat&logo=docker)
![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=flat&logo=vite)

## 🚀 Características

### Frontend (React + TypeScript)
- ⚡ **Desarrollo rápido** con Vite y Hot Module Replacement (HMR)
- 🎨 **Interfaz moderna** con Material-UI y tema oscuro
- 📱 **Diseño responsivo** que se adapta a cualquier dispositivo
- 🔧 **TypeScript** para un desarrollo más seguro y mantenible
- 🔄 **GraphQL Client** con Apollo Client para estado eficiente

### Backend (NestJS + GraphQL + Arquitectura Avanzada)
- 🚀 **API GraphQL** con Apollo Server para consultas eficientes
- 🏗️ **Abstract Repository Pattern** para operaciones CRUD reutilizables
- 🔒 **Abstract Entity Pattern** con decoradores GraphQL + MongoDB
- 📊 **Schema auto-generado** desde entidades TypeScript
- 🔄 **Tiempo real** con subscripciones GraphQL (próximamente)
- 🎯 **Arquitectura modular** y escalable con NestJS
- 🛡️ **Validación automática** con Class Validator
- 📝 **GraphQL Playground** integrado para desarrollo
- 📊 **Pino Logger** para logging estructurado y de alto rendimiento

### Base de Datos & DevOps
- 🐳 **Docker** para desarrollo y producción
- 🗄️ **MongoDB 7.0** con inicialización automática
- 🛠️ **Docker Compose** para orquestación de servicios
- � **Mongo Express** para administración visual
- 🔧 **Variables de entorno** configuradas automáticamente

## 🛠️ Stack tecnológico

### Frontend
- **React 19.1.0** - Biblioteca para construir interfaces de usuario
- **TypeScript 5.8.3** - Superset tipado de JavaScript
- **Material-UI 7.2.0** - Componentes de interfaz de usuario
- **Vite 7.0.4** - Herramienta de construcción y desarrollo
- **Emotion** - Biblioteca CSS-in-JS para estilización

### Backend
- **NestJS** - Framework de Node.js para APIs escalables
- **GraphQL + Apollo Server** - Lenguaje de consultas con servidor integrado
- **Abstract Repository Pattern** - Patrón para operaciones CRUD genéricas
- **Abstract Entity Pattern** - Entidades base con GraphQL + MongoDB
- **Class Validator** - Validación automática de datos
- **Pino Logger** - Sistema de logging estructurado y de alto rendimiento
- **TypeScript** - Desarrollo tipado y seguro

### Base de datos
- **MongoDB 7.0** - Base de datos NoSQL orientada a documentos
- **Mongoose** - ODM para MongoDB con esquemas tipados
- **Mongo Express** - Interfaz web para administración de MongoDB

### DevOps
- **Docker & Docker Compose** - Containerización y orquestación
- **Variables de entorno** - Configuración automática

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
   - **Backend GraphQL Playground**: http://localhost:3000/graphql
   - **Backend API**: http://localhost:3000
   - **Admin MongoDB**: http://localhost:8081

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
│   │   ├── common/             # Módulos compartidos
│   │   │   └── database/       # Patrones de base de datos
│   │   │       ├── abstract.entity.ts    # Entidad base GraphQL+MongoDB
│   │   │       ├── abstract.repository.ts # Repository pattern genérico
│   │   │       └── database.module.ts     # Configuración de BD
│   │   ├── users/              # Módulo de usuarios
│   │   │   ├── entities/       # Entidades GraphQL
│   │   │   ├── user.repository.ts # Repository específico
│   │   │   ├── users.resolver.ts  # Resolvers GraphQL
│   │   │   ├── users.service.ts   # Lógica de negocio
│   │   │   └── users.module.ts    # Configuración del módulo
│   │   ├── app.controller.ts   # Controlador principal
│   │   ├── app.module.ts       # Módulo raíz
│   │   ├── app.service.ts      # Servicio principal
│   │   └── main.ts            # Punto de entrada
│   ├── test/                  # Tests del backend
│   ├── .env                   # Variables de entorno
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

## 🏗️ Arquitectura del Proyecto

### 🎯 **Patrones de Diseño Implementados**

#### **1. Abstract Repository Pattern**
Patrón genérico para operaciones CRUD que elimina código duplicado:

```typescript
// Repositorio base con operaciones comunes
export abstract class AbstractRepository<T extends AbstractEntity> {
    async create(document: Omit<T, '_id'>): Promise<T>
    async findOne(filterQuery: FilterQuery<T>): Promise<T | null>
    async findOneAndUpdate(filterQuery, update): Promise<T>
    async find(filterQuery): Promise<T[]>
    async findOneAndDelete(filterQuery): Promise<T>
}

// Uso específico por entidad
export class UserRepository extends AbstractRepository<User> {
    // Hereda todos los métodos CRUD + métodos específicos de User
}
```

#### **2. Abstract Entity Pattern**
Entidad base que combina MongoDB con GraphQL automáticamente:

```typescript
@Schema()                    // Para MongoDB
@ObjectType({ isAbstract: true }) // Para GraphQL
export abstract class AbstractEntity {
  @Prop({ type: SchemaTypes.ObjectId })
  @Field(() => ID)           // Expuesto en GraphQL
  _id: Types.ObjectId;
}

// Las entidades heredan ambas funcionalidades
@ObjectType()
export class User extends AbstractEntity {
  @Field() @Prop()
  name: string;
}
```

#### **3. Module Pattern**
Arquitectura modular de NestJS con inyección de dependencias:

```typescript
@Module({
  imports: [DatabaseModule.forFeature([User])],
  providers: [UsersService, UserRepository, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
```

### 🔄 **Flujo de Datos**

```
Frontend (React) 
    ↓ GraphQL Query/Mutation
Backend (NestJS Resolver)
    ↓ Service Layer
Repository Pattern
    ↓ Mongoose ODM
MongoDB Database
```

### 📊 **Integración GraphQL**

1. **Schema Auto-generado**: Las entidades TypeScript generan automáticamente el schema GraphQL
2. **Playground Integrado**: Interfaz visual para probar queries en desarrollo
3. **Type Safety**: Tipos compartidos entre frontend y backend
4. **Resolvers Modulares**: Cada entidad tiene sus propios resolvers

```

## 🐳 Docker y base de datos

Este proyecto utiliza **Docker** para gestionar MongoDB de forma sencilla y consistente.

### Configuración de MongoDB
- **Puerto**: 27017
- **Base de datos**: chatter
- **Usuario administrador**: admin / password123
- **Usuario de aplicación**: chatter_user / chatter_password

### Conexión con Mongo Compass
```bash
# Opción 1: Usuario administrador (recomendado para desarrollo)
mongodb://admin:password123@localhost:27017/chatter?authSource=admin

# Opción 2: Usuario de aplicación
mongodb://chatter_user:chatter_password@localhost:27017/chatter
```

### Mongo Express (Interfaz web)
- **URL**: http://localhost:8081
- **Usuario admin**: admin
- **Contraseña admin**: admin123

### Variables de entorno
El proyecto está configurado para funcionar sin variables de entorno adicionales. La configuración de Docker está en `docker-compose.yml` y la inicialización de la base de datos en `init-mongo.js`.

Para más detalles sobre Docker, consulta [DOCKER.md](./DOCKER.md).

## 🔗 API GraphQL

### GraphQL Playground
Accede al playground interactivo en: **http://localhost:3000/graphql**

### 📝 **Ejemplos de Queries**

#### Obtener todos los usuarios:
```graphql
query GetUsers {
  users {
    _id
    name
    email
  }
}
```

#### Obtener un usuario específico:
```graphql
query GetUser {
  user(id: "65a1b2c3d4e5f6789abcdef0") {
    _id
    name
    email
  }
}
```

#### Crear un nuevo usuario:
```graphql
mutation CreateUser {
  createUser(createUserInput: {
    name: "Juan Pérez"
    email: "juan@example.com"
  }) {
    _id
    name
    email
  }
}
```

### 🔧 **Schema Generado Automáticamente**

El schema GraphQL se genera automáticamente desde las entidades TypeScript:

```graphql
type User {
  _id: ID!
  name: String!
  email: String!
}

type Query {
  users: [User!]!
  user(id: ID!): User
}

type Mutation {
  createUser(createUserInput: CreateUserInput!): User!
  updateUser(id: ID!, updateUserInput: UpdateUserInput!): User!
  removeUser(id: ID!): User!
}
```

### Conexión a MongoDB
```typescript
// String de conexión para el backend (configuración actual)
mongodb://chatter_user:chatter_password@localhost:27017/chatter
```

## 📊 Sistema de Logging (Pino)

Este proyecto utiliza **Pino** como sistema de logging de alto rendimiento, que ofrece mejor rendimiento y características más avanzadas que el logger nativo de NestJS.

### 🚀 **Características del Logger**

- **Alto rendimiento**: Hasta 5x más rápido que el logger nativo
- **Logs estructurados**: Formato JSON para producción
- **Formato pretty**: Logs legibles con colores en desarrollo
- **Redacción automática**: Oculta información sensible (headers de auth, cookies)
- **Nivel configurable**: Configurable desde variables de entorno
- **Timestamps automáticos**: Con zona horaria incluida

### 🔧 **Configuración**

El sistema está configurado automáticamente en `app.module.ts` con diferentes configuraciones para desarrollo y producción:

**Desarrollo:**
```bash
[2025-07-29 16:24:15.963 -0300] INFO: 🚀 Servidor iniciado en http://localhost:3000 {"context":"Bootstrap"}
```

**Producción:**
```json
{"level":30,"time":1643723055963,"pid":1234,"hostname":"server","context":"Bootstrap","msg":"🚀 Servidor iniciado en http://localhost:3000"}
```

### 📝 **Uso en servicios**

```typescript
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

@Injectable()
export class UsersService {
  constructor(
    @InjectPinoLogger(UsersService.name)
    private readonly logger: PinoLogger,
  ) {}

  async findAll() {
    this.logger.info('Obteniendo todos los usuarios');
    this.logger.debug('Query ejecutada', { query: 'db.users.find()' });
    // Tu lógica aquí
  }
}
```

### ⚙️ **Variables de entorno**

```bash
# Nivel de logging: error, warn, info, debug
LOG_LEVEL=debug

# Entorno (afecta el formato de logs)
NODE_ENV=development  # pretty format
NODE_ENV=production   # JSON format
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

### 🏗️ **Agregar nuevas entidades**

1. **Crear la entidad** extendiendo AbstractEntity:
```typescript
@ObjectType()
@Schema()
export class Message extends AbstractEntity {
  @Field() @Prop()
  text: string;

  @Field() @Prop()
  userId: string;
}
```

2. **Crear el repository** extendiendo AbstractRepository:
```typescript
export class MessageRepository extends AbstractRepository<Message> {
  protected readonly logger = new Logger(MessageRepository.name);
  
  // Métodos específicos de Message si son necesarios
}
```

3. **Crear service y resolver**:
```typescript
@Resolver(() => Message) 
export class MessageResolver {
  @Query(() => [Message])
  async messages() { /* ... */ }
  
  @Mutation(() => Message)
  async createMessage() { /* ... */ }
}
```

### 🚀 **Deployment y Producción**

#### Variables de entorno para producción:
```bash
# Backend .env
MONGODB_URI=mongodb://user:pass@your-mongo-host:27017/chatter
PORT=3000
NODE_ENV=production
LOG_LEVEL=info
CORS_ORIGIN=https://your-frontend-domain.com
JWT_SECRET=your-secure-jwt-secret-for-production
GRAPHQL_PLAYGROUND=false
GRAPHQL_INTROSPECTION=false
```

#### Build de contenedores Docker:
```bash
# Build para producción
docker build -t chatter-backend ./chatter-backend
docker build -t chatter-frontend ./chatter-ui
```

### 🧪 **Testing**

```bash
# Tests del backend con Jest
cd chatter-backend && npm run test

# Tests unitarios
cd chatter-backend && npm run test:unit

# Tests de integración
cd chatter-backend && npm run test:e2e

# Coverage de tests
cd chatter-backend && npm run test:cov
```
