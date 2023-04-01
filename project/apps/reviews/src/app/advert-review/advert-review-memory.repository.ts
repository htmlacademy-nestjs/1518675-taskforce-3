import {Injectable} from '@nestjs/common';
import {CRUDRepository, GetListParams} from '@project/util/util-types';
import {Review} from '@project/shared/app-types';
import crypto from 'crypto';
import {AdvertReviewEntity} from './advert-review.entity';

@Injectable()
export class AdvertReviewMemoryRepository implements CRUDRepository<AdvertReviewEntity, string, Review>, GetListParams {
  offset: number;
  limit: number;

  private repository: { [key: string]: Review } = {};

  public async create(item: AdvertReviewEntity): Promise<Review> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async findById(id: string): Promise<Review> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: AdvertReviewEntity): Promise<Review> {
    return item;
  }

  public async getList(getListParams: GetListParams): Promise<Review[]> {

    return null;
  }
}
