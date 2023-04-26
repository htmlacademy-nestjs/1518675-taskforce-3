import {Module} from '@nestjs/common';
import {AuthenticationController} from './authentication.controller';
import {AuthenticationService} from './authentication.service';
import {AdvertUserModule} from '../advert-user/advert-user.module';
import {JwtModule} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {getJwtOptions} from '@project/config/config-users';
import {JwtAccessStrategy} from './strategies/jwt-access.strategy';

@Module({
  imports: [
    AdvertUserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions
    })
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtAccessStrategy],
})
export class AuthenticationModule {
}
