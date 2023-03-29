import {Injectable} from '@nestjs/common';
import {CRUDRepository} from '@project/util/util-types';
import {Category} from '@project/shared/app-types';
import crypto from 'crypto';
import {AdvertCategoryEntity} from './advert-category.entity';

@Injectable()
export class AdvertCategoryMemoryRepository implements CRUDRepository<AdvertCategoryEntity, string, Category> {
  findById(id: string): Promise<Category> {
      throw new Error('Method not implemented.');
  }

  private repository: { [key: string]: Category } = {};

  public async create(item: AdvertCategoryEntity): Promise<Category> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async findAllCategories(): Promise<Category> {
    if (this.repository.category) {
      return {...this.repository.category};
    }

    return null;
  }

  public async findByName(id: string): Promise<Category> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: AdvertCategoryEntity): Promise<Category> {
    return item;
  }
}
