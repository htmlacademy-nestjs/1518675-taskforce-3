import { Module } from '@nestjs/common';
import {AdvertTaskModule} from '../advert-task/advert-task.module';
import {CreateTaskController} from './create-task.controller';
import {CreateTaskService} from './create-task.service';
import {AdvertTaskRepository} from './advert-task.repository';
import {AdvertTaskService} from '../advert-task/advert-task.service';

@Module({
  imports: [AdvertTaskModule],
  controllers: [CreateTaskController],
  providers: [CreateTaskService, AdvertTaskRepository, AdvertTaskService],
  exports: [CreateTaskService]
})
export class CreateTaskModule {}
