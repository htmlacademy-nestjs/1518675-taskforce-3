import {ConflictException, Injectable} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {USER_IS_NOT_CUSTOMER} from './create-task.constant';
import {AdvertTaskEntity} from '../advert-task/advert-task.entity';
import {AdvertTaskRepository} from './advert-task.repository';
import {Task} from '@project/shared/shared-types';

@Injectable()
export class CreateTaskService {
  private id: number; // временный id
  constructor(
    private readonly advertTaskRepository: AdvertTaskRepository
  ) {}

  public async add(dto: CreateTaskDto) {
    const {taskId, title, description, categoryId, price, image, address, tags, city, userId} = dto;

    const advertTask: Task = {
      taskId: Number(taskId),
      title,
      description,
      categoryId,
      price,
      image,
      address,
      tags: [],
      city: '',
      userId
    };

    // const isCustomer = await this.advertTaskRepository
    //   .findById(this.id);

    // if (!isCustomer) {
    //   throw new ConflictException(USER_IS_NOT_CUSTOMER);
    // }

    const taskEntity = await new AdvertTaskEntity(advertTask);

    return this.advertTaskRepository
      .create(taskEntity);
  }
}
