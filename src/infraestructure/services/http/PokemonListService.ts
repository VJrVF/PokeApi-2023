import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { PokemonDTO, ResponsePokeApiDTO } from '../dto/services.dto';

@Injectable()
export class PokemonListService {
  private readonly logger = new Logger(PokemonListService.name);
  constructor(private readonly httpService: HttpService) {}

  async request() {
    const response = await axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
    }).catch(() => {
      throw new ForbiddenException('API not available');
    });
    // const response = this.httpService
    //   .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');

    // const results = await firstValueFrom(response);
    const { results } = response.data;
    return results;
  }
}
