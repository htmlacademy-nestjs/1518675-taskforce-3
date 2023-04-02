import {Injectable} from '@nestjs/common';
import {AdvertTaskMemoryRepository} from './advert-task-memory.repository';

@Injectable()
export class AdvertTaskService {
  private id: string; // временный id
  constructor(
    private readonly advertTaskMemoryRepository: AdvertTaskMemoryRepository
  ) {}

  public async getTask(id: string) {
    return this.advertTaskMemoryRepository.findById(id);
  }

  public async getList() {
    return this.advertTaskMemoryRepository.getList({offset: 1, limit: 2});
  }

  public async updateTask(item) {
    return this.advertTaskMemoryRepository.update('124124', item);
  }
}
