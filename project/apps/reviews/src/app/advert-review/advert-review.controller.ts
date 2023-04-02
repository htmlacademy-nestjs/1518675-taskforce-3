import {Controller, Get, HttpStatus} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {CreateReviewService} from '../create-review/create-review.service';
import {AdvertReviewsRdo} from './rdo/advert-reviews.rdo';

@Controller('reviews')
export class AdvertReviewController {
  constructor(private readonly createReviewService: CreateReviewService) {}

  @ApiResponse({
    type: AdvertReviewsRdo,
    status: HttpStatus.OK,
    description: 'Reviews found'
  })
  @Get()
  public async show() {
    return await this.createReviewService.getList();
  }
}
