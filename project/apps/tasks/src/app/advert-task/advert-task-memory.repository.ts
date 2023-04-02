import {CRUDRepository, GetListParams, GetListRepository} from '@project/util/util-types';
import {Category, Task, User} from '@project/shared/app-types';
import {Injectable} from '@nestjs/common';
import crypto from 'crypto';
import {AdvertTaskEntity} from './advert-task.entity';

@Injectable()
export class AdvertTaskMemoryRepository implements CRUDRepository<AdvertTaskEntity, string, Task>, GetListRepository<any> {
  private repository: { [key: string]: Task } = {};

  public async create(item: AdvertTaskEntity): Promise<Task> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async findById(id: string): Promise<Task> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: AdvertTaskEntity): Promise<Task> {
    this.repository[id] = {...item.toObject(), _id: id};
    return this.findById(id);
  }

  public async getList(getListParams: GetListParams): Promise<Task[]> {

    return [];
  }
}
