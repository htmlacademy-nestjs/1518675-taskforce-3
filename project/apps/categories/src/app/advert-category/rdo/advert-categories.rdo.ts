import {ApiProperty} from '@nestjs/swagger';

export class AdvertCategoryRdo {
  @ApiProperty({
    description: 'Categories array',
    example: 'Юридические услуги, Ремонт бытовой техники'
  })
  public tagNames: [];
}
