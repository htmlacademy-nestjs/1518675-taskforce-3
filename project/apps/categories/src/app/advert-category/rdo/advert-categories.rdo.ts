import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class AdvertCategoryRdo {
  @ApiProperty({
    description: 'Category ID',
    example: '46'
  })
  @Expose()
  public categoryId: [];

  @ApiProperty({
    description: 'Category name',
    example: 'Юридические услуги'
  })
  @Expose()
  public name: [];

  @ApiProperty({
    description: 'Category created date',
    example: '02-12-2017'
  })
  @Expose()
  public createdAt: [];
}
