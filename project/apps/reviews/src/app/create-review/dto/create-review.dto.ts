import {ApiProperty} from '@nestjs/swagger';
import {User} from '@project/shared/shared-types';

export class CreateReviewDto {
  public reviewId: number;

  @ApiProperty({
    description: 'Review text',
    example: 'Отличный заказчик. Работа сделана безукоризненно!'
  })
  public text: string;

  @ApiProperty({
    description: 'Review rating',
    example: 4
  })
  public rating: number;

  @ApiProperty({
    description: 'Review complete task status',
    example: false
  })
  public completeValue: boolean;

  @ApiProperty({
    description: 'Review date',
    example: false
  })
  public createdAt: Date;

  @ApiProperty({
    description: 'Review user object',
    example: false
  })
  public user: string;

  @ApiProperty({
    description: 'Review user ID',
    example: false
  })
  public userId: number;

}
