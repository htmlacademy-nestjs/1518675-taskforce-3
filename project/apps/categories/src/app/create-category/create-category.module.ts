import {Module} from '@nestjs/common';
import {CreateCategoryService} from './create-category.service';
import {AdvertCategoryModule} from '../advert-category/advert-category.module';

@Module({
  imports: [AdvertCategoryModule],
  providers: [CreateCategoryService],
  exports: [CreateCategoryService]
})
export class CreateCategoryModule {
}
