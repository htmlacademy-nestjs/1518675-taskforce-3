import {Module} from '@nestjs/common';
import {AdvertCategoryModule} from './advert-category/advert-category.module';
import {CreateCategoryModule} from './create-category/create-category.module';

@Module({
  imports: [AdvertCategoryModule, CreateCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
