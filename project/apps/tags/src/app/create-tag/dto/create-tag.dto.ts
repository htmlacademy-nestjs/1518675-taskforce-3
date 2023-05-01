import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    description: 'Tag name',
    example: '#pepega'
  })
  @IsString()
  public tagName: string;
}
