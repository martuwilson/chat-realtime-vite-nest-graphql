import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Prop, Schema} from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
@ObjectType({
  isAbstract: true,
})
export abstract class AbstractEntity {
  // Aquí puedes definir propiedades comunes para todos los esquemas
  @Prop({ type: SchemaTypes.ObjectId })
  @Field(() => ID)
    _id: Types.ObjectId;
}









