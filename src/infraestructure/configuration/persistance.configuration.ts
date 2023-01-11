import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class PersistenceConfiguration implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb+srv://pokemon_2023:CiShiHBPtKG4gcdd@cluster0.4cmhm.mongodb.net/test',
    };
  }
}
