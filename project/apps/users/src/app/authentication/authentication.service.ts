import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import dayjs from 'dayjs';
import {AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG} from './authentication.constant';
import {AdvertUserEntity} from '../advert-user/advert-user.entity';
import {LoginUserDto} from './dto/login-user.dto';
import {AdvertUserRepository} from '../advert-user/advert-user.repository';
import {TokenPayload, User, UserRole} from '@project/shared/shared-types';
import {ConfigService} from '@nestjs/config';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly advertUserRepository: AdvertUserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, name, password, dateBirth, city} = dto;

    const advertUser = {
      email,
      name,
      role: UserRole.Executor,
      avatar: '',
      dateBirth: dayjs(dateBirth).toDate(),
      passwordHash: '',
      city
    };

    const existUser = await this.advertUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new AdvertUserEntity(advertUser)
      .setPassword(password)

    return this.advertUserRepository
      .create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.advertUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    const advertUserEntity = new AdvertUserEntity(existUser);
    if (!await advertUserEntity.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return advertUserEntity.toObject();
  }

  public async getUser(id: string) {
    return this.advertUserRepository.findById(id);
  }

  public async createUserToken(user: User) {
    const payload: TokenPayload = {
      sub: user._id,
      email: user.email,
      role: user.role,
      name: user.name,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
