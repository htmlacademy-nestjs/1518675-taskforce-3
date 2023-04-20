import {Module} from '@nestjs/common';
import {AdvertReviewController} from './advert-review.controller';
import {CreateReviewService} from '../create-review/create-review.service';
import {AdvertReviewRepository} from '../create-review/advert-review.repository';

@Module({
  providers: [CreateReviewService, AdvertReviewRepository],
  controllers: [AdvertReviewController],
  exports: []
})
export class AdvertReviewModule {
}
