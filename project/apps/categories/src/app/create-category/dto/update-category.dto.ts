import {ApiProperty} from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Юридические услуги'
  })
  public category: string;
}
