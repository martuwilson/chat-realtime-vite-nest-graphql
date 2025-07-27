import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles en toda la aplicación
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        CORS_ORIGIN: Joi.string().default('http://localhost:5173'),
        GRAPHQL_PLAYGROUND: Joi.boolean().default(true),
        GRAPHQL_INTROSPECTION: Joi.boolean().default(true),
        LOG_LEVEL: Joi.string().valid('error', 'warn', 'info', 'debug').default('info'),
      })
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
