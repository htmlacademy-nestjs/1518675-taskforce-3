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

  // public async verifyUser(dto: LoginUserDto) {
  //   const {email, password} = dto;
  //   const existUser = await this.advertUserRepository.findByEmail(email);
  //
  //   if (!existUser) {
  //     throw new NotFoundException(AUTH_USER_NOT_FOUND);
  //   }
  //
  //   const advertUserEntity = new AdvertUserEntity(existUser);
  //   if (!await advertUserEntity.comparePassword(password)) {
  //     throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
  //   }
  //
  //   return advertUserEntity.toObject();
  // }
  //
  public async getTask(id: string) {
    return this.advertTaskRepository.findById(id);
  }
}
