import {Module} from '@nestjs/common';
import {AdvertReviewMemoryRepository} from './advert-review-memory.repository';
import {AdvertReviewController} from './advert-review.controller';
import {CreateReviewService} from '../create-review/create-review.service';
import {AdvertReviewRepository} from '../create-review/advert-review.repository';

@Module({
  providers: [AdvertReviewMemoryRepository, CreateReviewService, AdvertReviewRepository],
  controllers: [AdvertReviewController],
  exports: [AdvertReviewMemoryRepository]
})
export class AdvertReviewModule {
}
