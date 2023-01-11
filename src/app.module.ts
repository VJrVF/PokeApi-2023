import { Module } from '@nestjs/common';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { ApplicationCoreModule } from './application-core/aplication-core.module';

@Module({
  imports: [UserInterfaceModule, ApplicationCoreModule],
})
export class AppModule {}
