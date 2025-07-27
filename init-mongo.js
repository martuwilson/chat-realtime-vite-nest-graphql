// Script de inicialización para MongoDB
db = db.getSiblingDB('chatter');

// Crear usuario para la aplicación
db.createUser({
  user: 'chatter_user',
  pwd: 'chatter_password',
  roles: [
    {
      role: 'readWrite',
      db: 'chatter'
    }
  ]
});

// Crear colecciones iniciales
db.createCollection('users');
db.createCollection('messages');
db.createCollection('rooms');

// Insertar datos de ejemplo
db.users.insertMany([
  {
    username: 'admin',
    email: 'admin@chatter.com',
    createdAt: new Date(),
    isActive: true
  },
  {
    username: 'user1',
    email: 'user1@chatter.com',
    createdAt: new Date(),
    isActive: true
  }
]);

db.rooms.insertOne({
  name: 'General',
  description: 'Sala general de chat',
  createdAt: new Date(),
  isPublic: true
});

print('✅ Base de datos chatter inicializada correctamente!');
