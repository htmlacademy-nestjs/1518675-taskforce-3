import { Module } from '@nestjs/common';
import {AdvertTaskController} from './advert-task.controller';
import {CreateTaskService} from '../create-task/create-task.service';
import {AdvertTaskService} from './advert-task.service';
import {AdvertTaskRepository} from '../create-task/advert-task.repository';

@Module({
  imports: [],
  providers: [CreateTaskService, AdvertTaskRepository, AdvertTaskService],
  controllers: [AdvertTaskController],
  exports: [AdvertTaskService]
})
export class AdvertTaskModule {}
