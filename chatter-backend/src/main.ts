import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  // Configurar CORS
  const corsOrigin = configService.get<string>('CORS_ORIGIN')?.split(',') || ['http://localhost:5173'];
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  });

  // Obtener puerto de las variables de entorno
  const port = configService.get<number>('PORT') || 3000;
  
  await app.listen(port);
  
  logger.log(`🚀 Servidor iniciado en http://localhost:${port}`);
  logger.log(`📊 GraphQL Playground disponible en http://localhost:${port}/graphql`);
}
bootstrap();
