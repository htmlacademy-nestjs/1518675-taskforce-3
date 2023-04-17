import {ApiProperty} from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Юридические услуги'
  })
  public name: string;

  @ApiProperty({
    description: 'Category created date',
    example: '02-02-20'
  })
  public createdAt: Date;
}
