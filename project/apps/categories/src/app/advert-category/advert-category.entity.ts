import {Category} from '@project/shared/shared-types';

export class AdvertCategoryEntity implements Category {
  public categoryId: string;
  public name: string;

  constructor(advertCategories: Category) {
    this.fillEntity(advertCategories);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertCategories: Category) {
    this.categoryId = advertCategories.categoryId;
    this.name = advertCategories.name;
  }
}
