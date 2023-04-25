import {Category} from '@project/shared/shared-types';

export class AdvertCategoryEntity implements Category {
  public categoryId: number;
  public name: string;
  public createdAt: Date;

  constructor(advertCategories: Category) {
    this.fillEntity(advertCategories);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertCategories: Category) {
    this.categoryId = advertCategories.categoryId;
    this.name = advertCategories.name;
    this.createdAt = advertCategories.createdAt;
  }
}
