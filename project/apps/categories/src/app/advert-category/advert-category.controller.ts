import {Controller, Get, HttpStatus} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {CreateCategoryService} from '../create-category/create-category.service';
import {AdvertCategoriesRdo} from './rdo/advert-categories.rdo';

@Controller('categories')
export class AdvertCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @ApiResponse({
    type: AdvertCategoriesRdo,
    status: HttpStatus.OK,
    description: 'Categories found'
  })
  @Get()
  public async show() {
    return await this.createCategoryService.getCategories();
  }
}
