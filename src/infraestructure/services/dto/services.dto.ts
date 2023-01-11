import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';

export class PokemonDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly url: string;
}

export class ResponsePokeApiDTO {
  @IsNumber()
  readonly counter: number;

  @IsString()
  readonly next: string;

  @IsBoolean()
  readonly previous: boolean;

  @IsArray()
  readonly results: PokemonDTO[];
}
