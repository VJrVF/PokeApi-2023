import { Injectable, Logger } from '@nestjs/common';
import { inputDTO } from 'src/infraestructure/persistance/dto/trainer.dto';
import { TrainerGateway } from 'src/infraestructure/persistance/gateways/trainer.gateway';

@Injectable()
export class FilterByNameInteractor {
  private logger = new Logger('FilterByNameInteractor');
  constructor(private readonly trainerGateway: TrainerGateway) {}
  async execute(input: inputDTO) {
    try {
      const trainers = await this.trainerGateway.filterByName(input.value);
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
