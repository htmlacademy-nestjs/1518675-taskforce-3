import {Module} from '@nestjs/common';
import {AdvertCategoryMemoryRepository} from './advert-category-memory.repository';
import {AdvertCategoryController} from './advert-category.controller';
import {CreateCategoryService} from '../create-category/create-category.service';

@Module({
  providers: [AdvertCategoryMemoryRepository, CreateCategoryService],
  controllers: [AdvertCategoryController],
  exports: [AdvertCategoryMemoryRepository]
})
export class AdvertCategoryModule {
}
