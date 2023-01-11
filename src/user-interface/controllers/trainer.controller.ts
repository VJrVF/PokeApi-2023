import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTrainerInteractor } from 'src/application-core/trainers/createTrainer.interactor';
import { GetTrainersInteractor } from 'src/application-core/trainers/getTrainers.interactor';
import { TrainerDTO } from 'src/infraestructure/persistance/dto/trainer.dto';

@Controller()
export class TrainerController {
  constructor(
    private readonly createTrainer: CreateTrainerInteractor,
    private readonly listTrainers: GetTrainersInteractor,
  ) {}

  @Post('v1/trainers/create')
  async createTrainers(@Body() trainer: TrainerDTO) {
    return await this.createTrainer.execute(trainer);
  }

  @Get('v1/trainers/list')
  async getTrainers() {
    return await this.listTrainers.execute();
  }
}
