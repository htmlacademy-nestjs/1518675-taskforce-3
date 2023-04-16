import {SALT_ROUNDS} from './advert-user.constant';
import {compare, genSalt, hash} from 'bcrypt';
import {User, UserRole} from '@project/shared/shared-types';

export class AdvertUserEntity implements User {
  public _id: string;
  public avatar: string;
  public dateBirth: Date;
  public email: string;
  public name: string;
  public passwordHash: string;
  public city: string;
  public role: UserRole;

  constructor(advertUser: User) {
    this.fillEntity(advertUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertUser: User) {
    this._id = advertUser._id;
    this.avatar = advertUser.avatar;
    this.dateBirth = advertUser.dateBirth;
    this.email = advertUser.email;
    this.name = advertUser.name;
    this.passwordHash = advertUser.passwordHash;
    this.role = advertUser.role;
    this.city = advertUser.city;
  }

  public async setPassword(password: string): Promise<AdvertUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
