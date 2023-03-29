import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AdvertTaskModule} from './advert-task/advert-task.module';
import {CreateTaskModule} from './create-task/create-task.module';

@Module({
  imports: [AdvertTaskModule, CreateTaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
