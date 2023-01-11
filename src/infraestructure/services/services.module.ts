import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpConfigService } from '../configuration/http.configuration';
import { PokemonListService } from './http/PokemonListService';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [PokemonListService],
  exports: [PokemonListService],
})
export class ServicesModule {}
