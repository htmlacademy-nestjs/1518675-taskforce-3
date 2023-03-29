import {Module} from '@nestjs/common';
import {AdvertCategoryMemoryRepository} from './advert-category-memory.repository';

@Module({
  providers: [AdvertCategoryMemoryRepository],
  exports: [AdvertCategoryMemoryRepository]
})
export class AdvertCategoryModule {
}
