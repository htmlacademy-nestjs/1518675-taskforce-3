import {Module} from '@nestjs/common';
import {CreateReviewService} from './create-review.service';
import {CreateReviewController} from './create-review.controller';
import {AdvertReviewModule} from '../advert-review/advert-review.module';

@Module({
  imports: [AdvertReviewModule],
  controllers: [CreateReviewController],
  providers: [CreateReviewService],
  exports: [CreateReviewService]
})
export class CreateReviewModule {
}
