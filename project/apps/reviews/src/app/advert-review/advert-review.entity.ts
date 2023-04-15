import {Review} from '@project/shared/app-types';

export class AdvertReviewEntity implements Review {
  public id: number;
  public text: string;
  public completeValue: string;
  public rating: number;

  constructor(advertReview: Review) {
    this.fillEntity(advertReview);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertReview: Review) {
    this.id = advertReview.id;
    this.text = advertReview.text;
    this.completeValue = advertReview.completeValue;
    this.rating = advertReview.rating;
  }
}
