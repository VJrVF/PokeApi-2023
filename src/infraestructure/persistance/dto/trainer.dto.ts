import { PartialType } from '@nestjs/swagger';
import { Trainer } from '../schemas/trainer.schema';

export class TrainerDTO extends PartialType(Trainer) {}

export class inputDTO {
  value: string;
}
