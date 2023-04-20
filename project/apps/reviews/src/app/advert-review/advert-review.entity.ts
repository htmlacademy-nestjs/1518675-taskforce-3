import {Review, User} from '@project/shared/shared-types';

export class AdvertReviewEntity implements Review {
  public reviewId: number;
  public text: string;
  public completeValue: boolean;
  public rating: number;
  public createdAt: Date;
  public user: string;
  public userId: number;

  constructor(advertReview: Review) {
    this.fillEntity(advertReview);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertReview: Review) {
    this.reviewId = advertReview.reviewId;
    this.text = advertReview.text;
    this.completeValue = advertReview.completeValue;
    this.rating = advertReview.rating;
  }
}
