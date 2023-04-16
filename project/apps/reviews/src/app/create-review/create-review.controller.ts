import {Body, Controller, HttpStatus, Post} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {fillObject} from '@project/util/util-core';
import {CreateReviewService} from './create-review.service';
import {CreateReviewDto} from './dto/create-review.dto';
import {AdvertReviewsRdo} from '../advert-review/rdo/advert-reviews.rdo';

@Controller('reviews')
export class CreateReviewController {
  constructor(private readonly createReviewService: CreateReviewService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new review has been successfully created.'
  })
  @Post('create-review')
  public async create(@Body() dto: CreateReviewDto) {
    const newReview = await this.createReviewService.createReview(dto);
    return fillObject(AdvertReviewsRdo, newReview);
  }
}
