import {Module} from '@nestjs/common';
import {AdvertReviewModule} from './advert-review/advert-review.module';
import {CreateReviewModule} from './create-review/create-review.module';

@Module({
  imports: [AdvertReviewModule, CreateReviewModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
