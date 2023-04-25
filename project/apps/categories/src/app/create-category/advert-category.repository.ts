import {AdvertCategoryEntity} from '../advert-category/advert-category.entity';
import {Injectable} from '@nestjs/common';
import {CRUDRepository} from '@project/util/util-types';
import {PrismaService} from '../prisma/prisma.service';
import {Category} from '@project/shared/shared-types';

@Injectable()
export class AdvertCategoryRepository implements CRUDRepository<AdvertCategoryEntity, number, Category> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async create(item: AdvertCategoryEntity): Promise<Category> {
    return this.prisma.category.create({
      data: {...item.toObject()}
    });
  }

  public async destroy(categoryId: number): Promise<void> {
    await this.prisma.category.delete({
      where: {
        categoryId,
      }
    });
  }

  public findById(categoryId: number): Promise<Category | null> {
    return this.prisma.category.findFirst({
      where: {
        categoryId
      }
    });
  }

  public find(ids: number[] = []): Promise<Category[]> {
    return this.prisma.category.findMany({
      where: {
        categoryId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(categoryId: number, item: AdvertCategoryEntity): Promise<Category> {
    return this.prisma.category.update({
      where: {
        categoryId
      },
      data: {...item.toObject(), categoryId}
    });
  }
}
