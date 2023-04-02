import {Category, Review} from '@project/shared/app-types';

export class AdvertReviewEntity implements Review {
  public _id: string;
  public text: string;
  public completeId: string;
  public rating: number;

  constructor(advertReview: Review) {
    this.fillEntity(advertReview);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertReview: Review) {
    this._id = advertReview._id;
    this.text = advertReview.text;
    this.completeId = advertReview.completeId;
    this.rating = advertReview.rating;
  }
}
