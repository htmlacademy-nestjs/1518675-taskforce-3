import {Category} from '@project/shared/app-types';

export class AdvertCategoryEntity implements Category {
  public _id: string;
  public category: string;

  constructor(advertCategories: Category) {
    this.fillEntity(advertCategories);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertCategories: Category) {
    this._id = advertCategories._id;
    this.category = advertCategories.category;
  }
}
