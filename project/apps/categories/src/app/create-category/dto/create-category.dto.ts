import {ApiProperty} from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Юридические услуги'
  })
  public category: string;
}
