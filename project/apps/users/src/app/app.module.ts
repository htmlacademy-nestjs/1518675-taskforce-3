import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdvertUserModule } from './advert-user/advert-user.module';

@Module({
  imports: [AuthenticationModule, AdvertUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
