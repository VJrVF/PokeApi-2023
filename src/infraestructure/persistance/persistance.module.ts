import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerGateway } from './gateways/trainer.gateway';
import { Trainer, TrainerSchema } from './schemas/trainer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Trainer.name,
        schema: TrainerSchema,
      },
    ]),
  ],
  providers: [TrainerGateway],
  exports: [TrainerGateway],
})
export class PersistenceModule {}
