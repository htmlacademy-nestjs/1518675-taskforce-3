import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
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
  async show(@Param('id') id: number) {
    const existCategory = await this.createCategoryService.getCategory(id);
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
  async destroy(@Param('id') id: number) {
    await this.createCategoryService.deleteCategory(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateCategoryDto) {
    const updatedCategory = await this.createCategoryService.updateCategory(id, dto)
    return fillObject(AdvertCategoryRdo, updatedCategory);
  }
}
