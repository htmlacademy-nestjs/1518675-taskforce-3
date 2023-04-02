import {Module} from '@nestjs/common';
import {CreateCategoryService} from './create-category.service';
import {AdvertCategoryModule} from '../advert-category/advert-category.module';
import {CreateCategoryController} from './create-category.controller';

@Module({
  imports: [AdvertCategoryModule],
  controllers: [CreateCategoryController],
  providers: [CreateCategoryService],
  exports: [CreateCategoryService]
})
export class CreateCategoryModule {
}
