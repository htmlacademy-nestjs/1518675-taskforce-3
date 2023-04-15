import {Module} from '@nestjs/common';
import {CreateReviewService} from './create-review.service';
import {CreateReviewController} from './create-review.controller';
import {AdvertReviewModule} from '../advert-review/advert-review.module';
import {AdvertReviewRepository} from './advert-review.repository';

@Module({
  imports: [AdvertReviewModule],
  controllers: [CreateReviewController],
  providers: [CreateReviewService, AdvertReviewRepository],
  exports: [CreateReviewService, AdvertReviewRepository]
})
export class CreateReviewModule {
}
