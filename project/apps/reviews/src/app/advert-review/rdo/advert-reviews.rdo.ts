import {ApiProperty} from '@nestjs/swagger';

export class AdvertReviewsRdo {
  @ApiProperty({
    description: 'Tags array',
    example: 'Юридические услуги, Ремонт бытовой техники'
  })
  public tagNames: [];
}
