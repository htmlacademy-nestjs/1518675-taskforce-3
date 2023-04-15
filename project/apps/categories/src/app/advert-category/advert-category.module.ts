import {Module} from '@nestjs/common';
import {AdvertCategoryMemoryRepository} from './advert-category-memory.repository';
import {AdvertCategoryController} from './advert-category.controller';
import {CreateCategoryService} from '../create-category/create-category.service';
import {AdvertCategoryRepository} from '../create-category/advert-category.repository';

@Module({
  providers: [AdvertCategoryMemoryRepository, CreateCategoryService, AdvertCategoryRepository],
  controllers: [AdvertCategoryController],
  exports: [AdvertCategoryMemoryRepository]
})
export class AdvertCategoryModule {
}
