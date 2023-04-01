import {ApiProperty} from '@nestjs/swagger';

export class TagRdo {
  @ApiProperty({
    description: 'Tag name',
    example: '#pepega'
  })
  public tagName: string;
}
