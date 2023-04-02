import {Module} from '@nestjs/common';
import {AdvertReviewMemoryRepository} from './advert-review-memory.repository';
import {AdvertReviewController} from './advert-review.controller';
import {CreateReviewService} from '../create-review/create-review.service';

@Module({
  providers: [AdvertReviewMemoryRepository, CreateReviewService],
  controllers: [AdvertReviewController],
  exports: [AdvertReviewMemoryRepository]
})
export class AdvertReviewModule {
}
