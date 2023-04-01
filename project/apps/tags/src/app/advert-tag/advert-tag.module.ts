import {Module} from '@nestjs/common';
import {AdvertTagController} from './advert-tag.controller';
import {AdvertTagMemoryRepository} from './advert-tag-memory.repository';
import {CreateTagService} from '../create-tag/create-tag.service';

@Module({
  providers: [AdvertTagMemoryRepository, CreateTagService],
  controllers: [AdvertTagController],
  exports: [AdvertTagMemoryRepository]
})
export class AdvertTagModule {
}
