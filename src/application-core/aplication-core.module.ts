import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infraestructure/infraestructure.module';
import { GetPokesInteractor } from './pokemons/getPokes.interactor';
import { CreateTrainerInteractor } from './trainers/createTrainer.interactor';
import { FilterByNameInteractor } from './trainers/filterByName.interactor';
import { FindTrainersInteractor } from './trainers/findTrainers.interactor';
import { GetTrainersInteractor } from './trainers/getTrainers.interactor';

const services = [
  GetPokesInteractor,
  CreateTrainerInteractor,
  GetTrainersInteractor,
  FindTrainersInteractor,
  FilterByNameInteractor,
];
@Module({
  imports: [InfrastructureModule],
  providers: services,
  exports: services,
})
export class ApplicationCoreModule {}
