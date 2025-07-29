import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // Configurar Pino Logger
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe());
  
  const configService = app.get(ConfigService);
  const logger = app.get(Logger);

  // Configurar CORS
  const corsOrigin = configService.get<string>('CORS_ORIGIN')?.split(',') || ['http://localhost:5173'];
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  });

  // Obtener puerto de las variables de entorno
  const port = configService.get<number>('PORT') || 3000;
  
  await app.listen(port);
  
  logger.log(`Servidor iniciado en http://localhost:${port}`, 'Bootstrap');
  logger.log(`GraphQL Playground disponible en http://localhost:${port}/graphql`, 'Bootstrap');
}
bootstrap();
