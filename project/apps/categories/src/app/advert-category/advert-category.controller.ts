import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {AdvertCategoryRdo} from './rdo/advert-categories.rdo';
import {CreateCategoryService} from '../create-category/create-category.service';
import {fillObject} from '@project/util/util-core';
import {CreateCategoryDto} from '../create-category/dto/create-category.dto';
import {UpdateCategoryDto} from '../create-category/dto/update-category.dto';

@Controller('categories')
export class AdvertCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @ApiResponse({
    type: AdvertCategoryRdo,
    status: HttpStatus.OK,
    description: 'Categories found'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);
    const existCategory = await this.createCategoryService.getCategory(categoryId);
    return fillObject(AdvertCategoryRdo, existCategory);
  }

  @Get('/')
  async index() {
    const categories = await this.createCategoryService.getCategories();
    return fillObject(AdvertCategoryRdo, categories);
  }

  @Post('/')
  async create(@Body() dto: CreateCategoryDto) {
    const newCategory = await this.createCategoryService.createCategory(dto);
    return fillObject(AdvertCategoryRdo, newCategory);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);
    this.createCategoryService.deleteCategory(categoryId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    const categoryId = parseInt(id, 10);
    const updatedCategory = await this.createCategoryService.updateCategory(categoryId, dto)
    return fillObject(AdvertCategoryRdo, updatedCategory);
  }
}
