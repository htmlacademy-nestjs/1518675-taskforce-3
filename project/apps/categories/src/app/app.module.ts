import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AdvertCategoryModule} from './advert-category/advert-category.module';
import {CreateCategoryModule} from './create-category/create-category.module';

@Module({
  imports: [AdvertCategoryModule, CreateCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
