import {ApiProperty} from '@nestjs/swagger';

export class TaskRdo {
  @ApiProperty({
    description: 'Task title',
    example: 'My task title'
  })
  public title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'My task full description',

  })
  public description: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Study',
  })
  public category: string;

  @ApiProperty({
    description: 'Task price',
    example: '12000'
  })
  public price: string;

  @ApiProperty({
    description: 'Task image',
    example: 'https://google.com/'
  })
  public image: string;

  @ApiProperty({
    description: 'Task address',
    example: 'ул. Пушкина, дом Колотушкина'
  })
  public address: string;

  @ApiProperty({
    description: 'Task tags',
    example: '#english, #pepega'
  })
  public tags: string;

  @ApiProperty({
    description: 'Task city',
    example: 'Москва'
  })
  public city: string;
}
