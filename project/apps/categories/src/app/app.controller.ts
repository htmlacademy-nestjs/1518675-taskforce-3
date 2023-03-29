import {Body, Controller, Get, HttpStatus, Post} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {fillObject} from '@project/util/util-core';
import {UserRdo} from '../../../users/src/app/authentication/rdo/user.rdo';
import {CreateCategoryDto} from './create-category/dto/create-category.dto';
import {CreateCategoryService} from './create-category/create-category.service';
import {CategoriesRdo} from './advert-category/rdo/categories.rdo';

@Controller('categories')
export class AppController {
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

  @ApiResponse({
    type: CategoriesRdo,
    status: HttpStatus.OK,
    description: 'Categories found'
  })
  @Get()
  public async show() {
    return await this.createCategoryService.getCategories();
  }
}
