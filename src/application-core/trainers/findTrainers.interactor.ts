import { Injectable, Logger } from '@nestjs/common';
import { TrainerDTO } from 'src/infraestructure/persistance/dto/trainer.dto';
import { TrainerGateway } from 'src/infraestructure/persistance/gateways/trainer.gateway';

@Injectable()
export class FindTrainersInteractor {
  private logger = new Logger('FindTrainersInteractor');
  constructor(private readonly trainerGateway: TrainerGateway) {}
  async execute(trainer: TrainerDTO) {
    try {
      const trainers = await this.trainerGateway.find(trainer);
      return {
        data: trainers,
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
