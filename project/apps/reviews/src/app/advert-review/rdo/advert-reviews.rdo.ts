import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class AdvertReviewsRdo {
  @ApiProperty({
    description: 'Reviews array',
    example: 'Юридические услуги, Ремонт бытовой техники'
  })
  @Expose()
  public reviews: [];
}
