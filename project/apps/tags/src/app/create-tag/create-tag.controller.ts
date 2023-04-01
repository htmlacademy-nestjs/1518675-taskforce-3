import {Body, Controller, HttpStatus, Post} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {fillObject} from '@project/util/util-core';
import {CreateTagService} from './create-tag.service';
import {CreateTagDto} from './dto/create-tag.dto';
import {TagRdo} from '../advert-tag/rdo/tag.rdo';

@Controller('tags')
export class CreateTagController {
  constructor(private readonly createTagService: CreateTagService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new tag has been successfully created.'
  })
  @Post('create-tag')
  public async create(@Body() dto: CreateTagDto) {
    const newTag = await this.createTagService.createTag(dto);
    return fillObject(TagRdo, newTag);
  }
}
