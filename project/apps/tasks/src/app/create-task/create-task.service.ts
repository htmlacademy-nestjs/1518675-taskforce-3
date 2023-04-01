import {ConflictException, Injectable} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {USER_IS_NOT_CUSTOMER} from './create-task.constant';
import {AdvertTaskEntity} from '../advert-task/advert-task.entity';
import {AdvertTaskMemoryRepository} from '../advert-task/advert-task-memory.repository';

@Injectable()
export class CreateTaskService {
  private id: string; // временный id
  constructor(
    private readonly advertTaskRepository: AdvertTaskMemoryRepository
  ) {}

  public async add(dto: CreateTaskDto) {
    const {title, description, category, price, image, address, tags, city} = dto;

    const advertTask = {
      title,
      description,
      category: '',
      price: '',
      image: '',
      address: '',
      tags: '',
      city: ''
    };

    const isCustomer = await this.advertTaskRepository
      .findById(this.id);

    if (!isCustomer) {
      throw new ConflictException(USER_IS_NOT_CUSTOMER);
    }

    const taskEntity = await new AdvertTaskEntity(advertTask);

    return this.advertTaskRepository
      .create(taskEntity);
  }

  public async getTask(id: string) {
    return this.advertTaskRepository.findById(id);
  }
}
