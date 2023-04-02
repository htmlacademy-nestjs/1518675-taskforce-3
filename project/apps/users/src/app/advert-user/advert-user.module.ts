import { Module } from '@nestjs/common';
import {AdvertUserMemoryRepository} from './advert-user-memory.repository';

@Module({
  providers: [AdvertUserMemoryRepository],
  exports: [AdvertUserMemoryRepository]
})
export class AdvertUserModule {}
