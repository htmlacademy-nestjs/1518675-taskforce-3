import {ConflictException, Injectable} from '@nestjs/common';
import {CreateReviewDto} from './dto/create-review.dto';
import {AdvertReviewEntity} from '../advert-review/advert-review.entity';
import {AdvertReviewRepository} from './advert-review.repository';

@Injectable()
export class CreateReviewService {
  constructor(
    private readonly advertReviewRepository: AdvertReviewRepository
  ) {}

  public async createReview(dto: CreateReviewDto) {
    const {text, rating, reviewId, completeValue, createdAt, user, userId} = dto;

    const advertReview = {
      reviewId,
      text,
      rating,
      completeValue,
      user,
      createdAt,
      userId
    };

    const existReview = await this.advertReviewRepository
      .findById(reviewId);

    if (existReview) {
      throw new ConflictException('Категория уже создана');
    }

    const reviewEntity = await new AdvertReviewEntity(advertReview);

    return this.advertReviewRepository
      .create(reviewEntity);
  }

  public async getList() {
    return this.advertReviewRepository.find();
  }
}
