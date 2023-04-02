import {ApiProperty} from '@nestjs/swagger';

export class CreateReviewDto {
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
    description: 'Review customer ID',
    example: '82160152'
  })
  public completeId: string;
}
