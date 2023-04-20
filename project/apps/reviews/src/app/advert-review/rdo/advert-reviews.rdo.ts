import {ApiProperty} from '@nestjs/swagger';

export class AdvertReviewsRdo {
  @ApiProperty({
    description: 'Reviews array',
    example: 'Юридические услуги, Ремонт бытовой техники'
  })
  public reviews: [];
}
