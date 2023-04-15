import {Module} from '@nestjs/common';
import {CreateCategoryService} from './create-category.service';
import {AdvertCategoryModule} from '../advert-category/advert-category.module';
import {CreateCategoryController} from './create-category.controller';
import {AdvertCategoryRepository} from './advert-category.repository';

@Module({
  imports: [AdvertCategoryModule],
  controllers: [CreateCategoryController],
  providers: [CreateCategoryService, AdvertCategoryRepository],
  exports: [CreateCategoryService, AdvertCategoryRepository]
})
export class CreateCategoryModule {
}
