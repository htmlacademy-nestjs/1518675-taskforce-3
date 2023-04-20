import {Module} from '@nestjs/common';
import {AdvertCategoryModule} from './advert-category/advert-category.module';
import {CreateCategoryModule} from './create-category/create-category.module';
import {PrismaModule} from './prisma/prisma.module';

@Module({
  imports: [AdvertCategoryModule, CreateCategoryModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
