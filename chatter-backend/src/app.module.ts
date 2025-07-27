import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './common/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
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
    DatabaseModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: true, // Genera automáticamente el schema GraphQL
        playground: configService.get<boolean>('GRAPHQL_PLAYGROUND'),
        introspection: configService.get<boolean>('GRAPHQL_INTROSPECTION'),
        context: ({ req, res }) => ({ req, res }), // Pasar request y response al contexto
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
