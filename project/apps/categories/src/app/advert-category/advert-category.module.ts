import {Module} from '@nestjs/common';
import {AdvertCategoryController} from './advert-category.controller';
import {CreateCategoryService} from '../create-category/create-category.service';
import {AdvertCategoryRepository} from '../create-category/advert-category.repository';

@Module({
  providers: [CreateCategoryService, AdvertCategoryRepository],
  controllers: [AdvertCategoryController],
  exports: []
})
export class AdvertCategoryModule {
}
