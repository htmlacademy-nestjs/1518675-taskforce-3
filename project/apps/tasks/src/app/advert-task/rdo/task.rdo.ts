import {ApiProperty} from '@nestjs/swagger';
import {Category} from '@project/shared/shared-types';
import {Expose} from 'class-transformer';

export class TaskRdo {
  @ApiProperty({
    description: 'Task ID',
    example: '53'
  })
  @Expose()
  public taskId: number;

  @ApiProperty({
    description: 'Task title',
    example: 'My task title'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'My task full description',
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Study',
  })
  @Expose()
  public category: Category;

  @ApiProperty({
    description: 'Task price',
    example: '12000'
  })
  @Expose()
  public price: string;

  @ApiProperty({
    description: 'Task image',
    example: 'https://google.com/'
  })
  @Expose()
  public image: string;

  @ApiProperty({
    description: 'Task address',
    example: 'ул. Пушкина, дом Колотушкина'
  })
  @Expose()
  public address: string;

  @ApiProperty({
    description: 'Task tags',
    example: '#english, #pepega'
  })
  @Expose()
  public tags: [];

  @ApiProperty({
    description: 'Task city',
    example: 'Москва'
  })
  @Expose()
  public city: string;

  @ApiProperty({
    description: 'Created task user ID',
    example: '90'
  })
  @Expose()
  public userId: number;
}
