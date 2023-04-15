import {Module} from '@nestjs/common';
import {AdvertReviewModule} from './advert-review/advert-review.module';
import {CreateReviewModule} from './create-review/create-review.module';
import {PrismaModule} from './prisma/prisma.module';

@Module({
  imports: [AdvertReviewModule, CreateReviewModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
