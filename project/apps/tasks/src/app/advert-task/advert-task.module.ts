import { Module } from '@nestjs/common';
import {AdvertTaskMemoryRepository} from './advert-task-memory.repository';
import {AdvertTaskController} from './advert-task.controller';
import {CreateTaskService} from '../create-task/create-task.service';
import {AdvertTaskService} from './advert-task.service';

@Module({
  providers: [AdvertTaskMemoryRepository, CreateTaskService, AdvertTaskService],
  controllers: [AdvertTaskController],
  exports: [AdvertTaskMemoryRepository]
})
export class AdvertTaskModule {}
