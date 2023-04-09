import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdvertUserModule } from './advert-user/advert-user.module';
import {ConfigUsersModule, getMongooseOptions} from '@project/config/config-users';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    AuthenticationModule,
    AdvertUserModule,
    ConfigUsersModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
