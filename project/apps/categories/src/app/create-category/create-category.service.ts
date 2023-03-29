import {ConflictException, Injectable} from '@nestjs/common';
import {CreateCategoryDto} from './dto/create-category.dto';
import {AdvertCategoryMemoryRepository} from '../advert-category/advert-category-memory.repository';
import {AdvertCategoryEntity} from '../advert-category/advert-category.entity';

@Injectable()
export class CreateCategoryService {
  constructor(
    private readonly advertCategoryRepository: AdvertCategoryMemoryRepository
  ) {}

  public async createCategory(dto: CreateCategoryDto) {
    const {category} = dto;

    const advertCategory = {
      category,
    };

    const existTag = await this.advertCategoryRepository
      .findByName(category);

    if (existTag) {
      throw new ConflictException('Категория уже создана');
    }

    const categoryEntity = await new AdvertCategoryEntity(advertCategory);

    return this.advertCategoryRepository
      .create(categoryEntity);
  }

  public async getCategories() {
    return this.advertCategoryRepository.findAllCategories();
  }
}
