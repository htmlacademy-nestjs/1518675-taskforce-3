import {ApiProperty} from '@nestjs/swagger';

export class AdvertCategoryRdo {
  @ApiProperty({
    description: 'Category ID',
    example: '46'
  })
  public categoryId: [];

  @ApiProperty({
    description: 'Category name',
    example: 'Юридические услуги'
  })
  public name: [];

  @ApiProperty({
    description: 'Category created date',
    example: '02-12-2017'
  })
  public createdAt: [];
}
