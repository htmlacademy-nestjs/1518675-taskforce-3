import {Injectable} from '@nestjs/common';
import {AdvertTaskRepository} from '../create-task/advert-task.repository';

@Injectable()
export class AdvertTaskService {
  private id: string; // временный id
  constructor(
    private readonly AdvertTaskRepository: AdvertTaskRepository
  ) {}

  public async getTask(id: number) {
    return this.AdvertTaskRepository.findById(id);
  }

  public async getList() {
    return this.AdvertTaskRepository.find();
  }

  public async updateTask(item) {
    return this.AdvertTaskRepository.update(214, item);
  }
}
