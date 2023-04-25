import {Controller, Get, HttpStatus, Param} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {CreateReviewService} from '../create-review/create-review.service';
import {AdvertReviewsRdo} from './rdo/advert-reviews.rdo';
import {fillObject} from '@project/util/util-core';

@Controller('reviews')
export class AdvertReviewController {
  constructor(
    private readonly createReviewService: CreateReviewService
  ) {
  }

  @ApiResponse({
    type: AdvertReviewsRdo,
    status: HttpStatus.OK,
    description: 'Reviews found'
  })
  @Get()
  public async getList() {
    return await this.createReviewService.getList();
  }

  @ApiResponse({
    type: AdvertReviewsRdo,
    status: HttpStatus.OK,
    description: 'Review found'
  })
  @Get(':id')
  public async show(@Param('id') id: number) {
    const existReview = await this.createReviewService.getReview(id);
    return fillObject(AdvertReviewsRdo, existReview);
  }
}
