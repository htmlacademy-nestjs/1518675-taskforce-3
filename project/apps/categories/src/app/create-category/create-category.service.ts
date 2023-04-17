import { CreateCategoryDto } from './dto/create-category.dto';
// import { Category } from '@project/shared/app-types';
import { AdvertCategoryRepository } from './advert-category.repository';
import { Injectable } from '@nestjs/common';
// import { AdvertCategoryEntity } from './advert-category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {AdvertCategoryEntity} from '../advert-category/advert-category.entity';
import {Category} from '@project/shared/shared-types';

@Injectable()
export class CreateCategoryService {
  constructor(
    private readonly advertCategoryRepository: AdvertCategoryRepository
  ) {}

  async createCategory(dto: CreateCategoryDto): Promise<Category> {
    const categoryEntity = new AdvertCategoryEntity(dto);
    return this.advertCategoryRepository.create(categoryEntity);
  }

  async deleteCategory(id: number): Promise<void> {
    this.advertCategoryRepository.destroy(id);
  }

  async getCategory(id: number): Promise<Category> {
    return this.advertCategoryRepository.findById(id);
  }

  async getCategories(): Promise<Category[]> {
    return this.advertCategoryRepository.find();
  }

  async updateCategory(id: number, dto: UpdateCategoryDto): Promise<Category> {
    return this.advertCategoryRepository.update(id, new AdvertCategoryEntity(dto));
  }
}
