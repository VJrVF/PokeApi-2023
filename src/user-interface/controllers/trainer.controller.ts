import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTrainerInteractor } from 'src/application-core/trainers/createTrainer.interactor';
import { FilterByNameInteractor } from 'src/application-core/trainers/filterByName.interactor';
import { FindTrainersInteractor } from 'src/application-core/trainers/findTrainers.interactor';
import { GetTrainersInteractor } from 'src/application-core/trainers/getTrainers.interactor';
import {
  inputDTO,
  TrainerDTO,
} from 'src/infraestructure/persistance/dto/trainer.dto';

@Controller()
export class TrainerController {
  constructor(
    private readonly createTrainer: CreateTrainerInteractor,
    private readonly listTrainers: GetTrainersInteractor,
    private readonly findTrainer: FindTrainersInteractor,
    private readonly filterTrainer: FilterByNameInteractor,
  ) {}

  @Post('v1/trainers')
  async createTrainers(@Body() trainer: TrainerDTO) {
    return await this.createTrainer.execute(trainer);
  }

  @Get('v1/trainers')
  async getTrainers() {
    return await this.listTrainers.execute();
  }

  @Get('v1/trainers/find')
  async findTrainers(@Body() trainer: TrainerDTO) {
    return await this.findTrainer.execute(trainer);
  }

  @Get('v1/trainers/filterByName')
  async filterTrainers(@Body() input: inputDTO) {
    return await this.filterTrainer.execute(input);
  }
}
