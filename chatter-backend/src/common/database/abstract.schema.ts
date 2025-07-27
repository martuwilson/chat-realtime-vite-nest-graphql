import {Prop, Schema} from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()

export abstract class AbstractDocument {
  // Aquí puedes definir propiedades comunes para todos los esquemas
  @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
}









