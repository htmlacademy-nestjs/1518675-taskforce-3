import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsString} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Task ID',
    example: '51'
  })
  @IsInt()
  public taskId: number;

  @ApiProperty({
    description: 'Task title',
    example: 'My task title'
  })
  @IsString()
  public title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'My task full description',
  })
  @IsString()
  public description: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Study',
  })
  @IsInt()
  public categoryId: number;

  @ApiProperty({
    description: 'Task price',
    example: '12000'
  })
  @IsString()
  public price: string;

  @ApiProperty({
    description: 'Task image',
    example: 'https://google.com/'
  })
  @IsString()
  public image: string;

  @ApiProperty({
    description: 'Task address',
    example: 'ул. Пушкина, дом Колотушкина'
  })
  @IsString()
  public address: string;

  @ApiProperty({
    description: 'Task tags',
    example: '#english, #pepega'
  })
  public tags: [];

  @ApiProperty({
    description: 'Task city',
    example: 'Москва'
  })
  @IsString()
  public city: string;

  @ApiProperty({
    description: 'Task userID',
    example: '2141'
  })
  public userId: string;
}
