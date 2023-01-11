import { Module } from '@nestjs/common';
import { ApplicationCoreModule } from 'src/application-core/aplication-core.module';
import { PokemonController } from './controllers/pokemon.controller';
import { TrainerController } from './controllers/trainer.controller';

@Module({
  imports: [ApplicationCoreModule],
  controllers: [PokemonController, TrainerController],
})
export class UserInterfaceModule {}
