import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infraestructure/infraestructure.module';
import { GetPokesInteractor } from './pokemons/getPokes.interactor';
import { CreateTrainerInteractor } from './trainers/createTrainer.interactor';
import { GetTrainersInteractor } from './trainers/getTrainers.interactor';

@Module({
  imports: [InfrastructureModule],
  providers: [
    GetPokesInteractor,
    CreateTrainerInteractor,
    GetTrainersInteractor,
  ],
  exports: [GetPokesInteractor, CreateTrainerInteractor, GetTrainersInteractor],
})
export class ApplicationCoreModule {}
