import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Юридические услуги'
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'Category created date',
    example: '02-02-20'
  })
  public createdAt: Date;
}
