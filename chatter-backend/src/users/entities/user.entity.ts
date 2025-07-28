import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractEntity } from "src/common/database/abstract.entity";


@Schema({versionKey: false})
@ObjectType()

export class User extends AbstractEntity {
  // Aquí puedes definir propiedades específicas del esquema de usuario
  @Prop({ required: true, unique: true })
  @Field()
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);