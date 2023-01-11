import { Module } from '@nestjs/common';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { ApplicationCoreModule } from './application-core/aplication-core.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserInterfaceModule,
    ApplicationCoreModule,
  ],
})
export class AppModule {}
