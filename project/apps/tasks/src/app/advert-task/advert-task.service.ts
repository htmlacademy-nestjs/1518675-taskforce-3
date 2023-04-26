import {Injectable} from '@nestjs/common';
import {AdvertTaskRepository} from '../create-task/advert-task.repository';
import {TaskQuery} from './query/task.query';
import {Task} from '@project/shared/shared-types';

@Injectable()
export class AdvertTaskService {
  constructor(
    private readonly AdvertTaskRepository: AdvertTaskRepository
  ) {}

  public async getTask(id: number) {
    return this.AdvertTaskRepository.findById(id);
  }

  public async getList(query: TaskQuery): Promise<Task[]> {
    return this.AdvertTaskRepository.find(query);
  }

  public async updateTask(item) {
    return this.AdvertTaskRepository.update(214, item);
  }
}
