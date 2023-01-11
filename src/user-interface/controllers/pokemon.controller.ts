import { Controller, Get } from '@nestjs/common';
import { GetPokesInteractor } from '../../application-core/pokemons/getPokes.interactor';

@Controller()
export class PokemonController {
  constructor(private readonly getPokes: GetPokesInteractor) {}

  @Get('/v1/pokemons')
  async getPokemons() {
    return await this.getPokes.execute();
  }
}
