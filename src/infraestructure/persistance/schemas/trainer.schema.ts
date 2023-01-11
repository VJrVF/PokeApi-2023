import { IsMongoId } from '@nestjs/class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TrainerDocument = Trainer & Document;

@Schema()
export class Trainer {
  @IsMongoId()
  _id!: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  dni: string;

  @Prop()
  pokemons: string[];
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer);
