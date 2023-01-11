import { Injectable, Logger } from '@nestjs/common';
import { PokemonListService } from '../../infraestructure/services/http/PokemonListService';

@Injectable()
export class GetPokesInteractor {
  private logger = new Logger('GetPokesInteractor');
  constructor(private readonly pokemonList: PokemonListService) {}
  async execute() {
    try {
      const pokemons = await this.pokemonList.request();
      console.log(pokemons);
      const namePokemons = pokemons.map((pokemon) => pokemon.name);
      return namePokemons;
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
