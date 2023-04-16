import {ApiProperty} from '@nestjs/swagger';

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
}
