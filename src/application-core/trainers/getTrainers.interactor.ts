import { Injectable, Logger } from '@nestjs/common';
import { TrainerGateway } from 'src/infraestructure/persistance/gateways/trainer.gateway';

@Injectable()
export class GetTrainersInteractor {
  private logger = new Logger('GetTrainersInteractor');
  constructor(private readonly trainerGateway: TrainerGateway) {}
  async execute() {
    try {
      const trainers = await this.trainerGateway.list();
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
