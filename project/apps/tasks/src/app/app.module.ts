import { Module } from '@nestjs/common';
import {AdvertTaskModule} from './advert-task/advert-task.module';
import {CreateTaskModule} from './create-task/create-task.module';
import {PrismaModule} from './prisma/prisma.module';

@Module({
  imports: [AdvertTaskModule, CreateTaskModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
