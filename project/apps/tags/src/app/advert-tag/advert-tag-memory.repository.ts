import {CRUDRepository, GetListParams, GetListRepository} from '@project/util/util-types';
import {Category, Tag} from '@project/shared/app-types';
import {Injectable} from '@nestjs/common';
import crypto from 'crypto';
import {AdvertTagEntity} from './advert-tag.entity';

@Injectable()
export class AdvertTagMemoryRepository implements CRUDRepository<AdvertTagEntity, string, Tag>, GetListRepository<any> {
  offset: number;
  limit: number;

  private repository: { [key: string]: Tag } = {};

  public async create(item: AdvertTagEntity): Promise<Tag> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async findById(id: string): Promise<Tag> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async findByTagName(tagName: string): Promise<Tag> {
    if (this.repository[tagName]) {
      return {...this.repository[tagName]};
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: AdvertTagEntity): Promise<Tag> {
    return item;
  }

  public async getList(getListParams: GetListParams): Promise<Tag[]> {

    return [];
  }
}
