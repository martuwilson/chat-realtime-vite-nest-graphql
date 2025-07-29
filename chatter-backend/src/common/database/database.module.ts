import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ModelDefinition, MongooseModule } from "@nestjs/mongoose";
import { DbMigrationService } from "./db-migration.service";


@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_URI'),
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [DbMigrationService],
})

export class DatabaseModule {
    static forFeature(model: ModelDefinition[]) {
        return MongooseModule.forFeature(model);
    }
}