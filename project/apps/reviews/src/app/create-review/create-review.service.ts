import {ConflictException, Injectable} from '@nestjs/common';
import {CreateReviewDto} from './dto/create-review.dto';
import {AdvertReviewMemoryRepository} from '../advert-review/advert-review-memory.repository';
import {AdvertReviewEntity} from '../advert-review/advert-review.entity';

@Injectable()
export class CreateReviewService {
  constructor(
    private readonly advertReviewRepository: AdvertReviewMemoryRepository
  ) {}

  public async createCategory(dto: CreateReviewDto) {
    const {text, rating, completeId} = dto;

    const advertReview = {
      text,
      rating,
      completeId
    };

    const existReview = await this.advertReviewRepository
      .findById(text);

    if (existReview) {
      throw new ConflictException('Категория уже создана');
    }

    const categoryEntity = await new AdvertReviewEntity(advertReview);

    return this.advertReviewRepository
      .create(categoryEntity);
  }

  public async getList() {
    return this.advertReviewRepository.getList({offset: 22, limit: 11});
  }
}
