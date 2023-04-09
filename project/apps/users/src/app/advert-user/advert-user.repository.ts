import {CRUDRepository} from '@project/util/util-types';
import {Injectable} from '@nestjs/common';
import {AdvertUserEntity} from './advert-user.entity';
import {User} from '@project/shared/app-types';
import {AdvertUserModel} from './advert-user.model';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class AdvertUserRepository implements CRUDRepository<AdvertUserEntity, string, User> {
  constructor(
    @InjectModel(AdvertUserModel.name) private readonly advertUserModel: Model<AdvertUserModel>) {
  }

  public async create(item: AdvertUserEntity): Promise<User> {
    const newAdvertUser = new this.advertUserModel(item);

    console.log(newAdvertUser);

    return newAdvertUser.save();
  }

  public async destroy(id: string): Promise<void> {
    await this.advertUserModel
      .deleteOne({_id: id})
      .exec();
  }

  public async findById(id: string): Promise<User | null> {
    return this.advertUserModel
      .findOne({_id: id})
      .exec();
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.advertUserModel
      .findOne({email})
      .exec();
  }

  public async update(id: string, item: AdvertUserEntity): Promise<User> {
    return this.advertUserModel
      .findByIdAndUpdate(id, item.toObject(), {new: true})
      .exec();
  }
}
