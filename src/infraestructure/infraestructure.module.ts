import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersistenceConfiguration } from './configuration/persistance.configuration';
import { PersistenceModule } from './persistance/persistance.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: PersistenceConfiguration,
    }),
    PersistenceModule,
    ServicesModule,
  ],
  exports: [PersistenceModule, ServicesModule],
})
export class InfrastructureModule {}
