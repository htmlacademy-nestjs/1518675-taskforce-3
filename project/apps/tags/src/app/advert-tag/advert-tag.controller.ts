import {Controller, Get, HttpStatus} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {TagRdo} from './rdo/tag.rdo';
import {CreateTagService} from '../create-tag/create-tag.service';

@Controller('tags')
export class AdvertTagController {
  constructor(private readonly createTagService: CreateTagService) {}

  @ApiResponse({
    type: TagRdo,
    status: HttpStatus.OK,
    description: 'Tags found'
  })
  @Get()
  public async show() {
    return await this.createTagService.getTags();
  }
}
