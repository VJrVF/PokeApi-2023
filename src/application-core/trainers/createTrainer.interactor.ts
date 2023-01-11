import { Injectable, Logger } from '@nestjs/common';
import { TrainerDTO } from 'src/infraestructure/persistance/dto/trainer.dto';
import { TrainerGateway } from 'src/infraestructure/persistance/gateways/trainer.gateway';

@Injectable()
export class CreateTrainerInteractor {
  private logger = new Logger('CreateTrainerInteractor');
  constructor(private readonly trainerGateway: TrainerGateway) {}
  async execute(trainer: TrainerDTO) {
    try {
      const newTrainer = await this.trainerGateway.create(trainer);
      return {
        data: newTrainer,
      };
    } catch (e) {
      this.logger.error(e);
      return {
        error: {
          code: 'ERRORCODE',
          message: e.message,
        },
      };
    }
  }
}
