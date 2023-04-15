import {Review} from '@project/shared/app-types';
import {Injectable} from '@nestjs/common';
import {CRUDRepository} from '@project/util/util-types';
import {PrismaService} from '../prisma/prisma.service';
import {AdvertReviewEntity} from '../advert-review/advert-review.entity';

@Injectable()
export class AdvertReviewRepository implements CRUDRepository<AdvertReviewEntity, number, Review> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async create(item: AdvertReviewEntity): Promise<Review> {
    return this.prisma.review.create({
      data: {...item.toObject()}
    });
  }

  public async destroy(reviewId: number): Promise<void> {
    await this.prisma.review.delete({
      where: {
        reviewId,
      }
    });
  }

  public findById(reviewId: number): Promise<Review | null> {
    return this.prisma.review.findFirst({
      where: {
        reviewId
      }
    });
  }

  public find(ids: number[] = []): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: {
        reviewId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(reviewId: number, item: AdvertReviewEntity): Promise<Review> {
    return this.prisma.review.update({
      where: {
        reviewId
      },
      data: {...item.toObject(), reviewId}
    });
  }
}
