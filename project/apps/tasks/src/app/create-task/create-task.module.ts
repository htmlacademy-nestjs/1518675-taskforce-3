import { Module } from '@nestjs/common';
import {AdvertTaskModule} from '../advert-task/advert-task.module';
import {CreateTaskController} from './create-task.controller';
import {CreateTaskService} from './create-task.service';

@Module({
  imports: [AdvertTaskModule],
  controllers: [CreateTaskController],
  providers: [CreateTaskService],
  exports: [CreateTaskService]
})
export class CreateTaskModule {}
