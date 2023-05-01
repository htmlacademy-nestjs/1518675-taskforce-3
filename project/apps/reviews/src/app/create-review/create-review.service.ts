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
    const {text, rating, completeValue, createdAt, userId} = dto;

    const advertReview = {
      text,
      rating,
      completeValue,
      createdAt,
      userId
    };

    // const existReview = await this.advertReviewRepository
    //   .findById(reviewId);
    //
    // if (existReview) {
    //   throw new ConflictException('Категория уже создана');
    // }

    const reviewEntity = await new AdvertReviewEntity(advertReview);

    return this.advertReviewRepository
      .create(reviewEntity);
  }

  public async getList() {
    return this.advertReviewRepository.find();
  }

  public async getReview(id: number) {
    return this.advertReviewRepository.findById(id);
  }
}
