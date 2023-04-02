import { Module } from '@nestjs/common';
import {AdvertTaskModule} from './advert-task/advert-task.module';
import {CreateTaskModule} from './create-task/create-task.module';

@Module({
  imports: [AdvertTaskModule, CreateTaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
