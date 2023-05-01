import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsInt, IsString} from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    description: 'Review text',
    example: 'Отличный заказчик. Работа сделана безукоризненно!'
  })
  @IsString()
  public text: string;

  @ApiProperty({
    description: 'Review rating',
    example: 4
  })
  @IsInt()
  public rating: number;

  @ApiProperty({
    description: 'Review complete task status',
    example: false
  })
  @IsBoolean()
  public completeValue: boolean;

  @ApiProperty({
    description: 'Review date',
    example: false
  })
  public createdAt: Date;

  @ApiProperty({
    description: 'Review user ID',
    example: '8826158'
  })
  @IsString()
  public userId: number;

}
