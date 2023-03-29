import { Module } from '@nestjs/common';
import {AdvertTaskMemoryRepository} from './advert-task-memory.repository';

@Module({
  providers: [AdvertTaskMemoryRepository],
  exports: [AdvertTaskMemoryRepository]
})
export class AdvertTaskModule {}
