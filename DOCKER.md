# 🐳 Configuración de Docker para MongoDB

Este proyecto usa Docker para gestionar MongoDB de forma fácil y limpia.

## 📋 Prerrequisitos

1. **Instalar Docker Desktop:**
   - Ve a [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
   - Descarga e instala Docker Desktop para Windows
   - Reinicia tu PC después de la instalación
   - Asegúrate de que Docker Desktop esté corriendo

## 🚀 Comandos disponibles

### **Gestión de la base de datos:**
```bash
# Iniciar MongoDB (en segundo plano)
npm run db:up

# Detener MongoDB y limpiar contenedores
npm run db:down

# Reiniciar MongoDB
npm run db:restart

# Ver logs de MongoDB
npm run db:logs

# Iniciar interfaz web de administración (Mongo Express)
npm run db:admin
```

### **Desarrollo:**
```bash
# Instalar dependencias en todos los proyectos
npm run install:all

# Iniciar solo el frontend
npm run dev:ui

# Iniciar solo el backend
npm run dev:api

# Iniciar todo (DB + Backend + Frontend)
npm run dev
```

## 🔗 URLs de acceso

- **MongoDB**: `mongodb://localhost:27017`
- **Mongo Express** (Admin Web): `http://localhost:8081`
  - Usuario: `admin`
  - Contraseña: `admin123`

## 🗄️ Credenciales de la base de datos

### **Admin (para conexiones externas):**
- Usuario: `admin`
- Contraseña: `password123`

### **Aplicación (para el backend):**
- Usuario: `chatter_user`
- Contraseña: `chatter_password`
- Base de datos: `chatter`

## 📊 Configuración del Backend

En tu backend NestJS, usa esta connection string:

```typescript
// chatter-backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://chatter_user:chatter_password@localhost:27017/chatter'),
    // ... otros imports
  ],
})
export class AppModule {}
```

## 🛠️ Comandos Docker directos (opcional)

Si prefieres usar Docker directamente:

```bash
# Iniciar todos los servicios
docker-compose up -d

# Ver servicios corriendo
docker-compose ps

# Detener servicios
docker-compose down

# Ver logs
docker-compose logs -f mongodb

# Acceder al shell de MongoDB
docker exec -it chatter-mongodb mongosh -u admin -p password123
```

## 🔧 Solución de problemas

### **Puerto 27017 ocupado:**
```bash
# Ver qué proceso usa el puerto
netstat -ano | findstr :27017

# Cambiar el puerto en docker-compose.yml
ports:
  - "27018:27017"  # Usa 27018 en lugar de 27017
```

### **Docker no inicia:**
1. Asegúrate de que Docker Desktop esté corriendo
2. Reinicia Docker Desktop
3. Si persiste, reinicia tu PC

### **Problemas de permisos:**
```bash
# Limpiar volúmenes y reiniciar
docker-compose down -v
docker-compose up -d
```

## 🎯 Ventajas de esta configuración

✅ **MongoDB listo en segundos**  
✅ **Interfaz web para administrar datos**  
✅ **Datos persistentes** (no se pierden al reiniciar)  
✅ **Fácil de limpiar** (solo un comando)  
✅ **No ensucia tu sistema**  
✅ **Configuración reproducible**
