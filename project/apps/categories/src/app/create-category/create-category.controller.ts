import {Body, Controller, HttpStatus, Post} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {fillObject} from '@project/util/util-core';
import {CreateCategoryService} from './create-category.service';
import {CreateCategoryDto} from './dto/create-category.dto';
import {UserRdo} from '../../../../users/src/app/authentication/rdo/user.rdo';

@Controller('categories')
export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new category has been successfully created.'
  })
  @Post('create-category')
  public async create(@Body() dto: CreateCategoryDto) {
    const newCategory = await this.createCategoryService.createCategory(dto);
    return fillObject(UserRdo, newCategory);
  }
}
