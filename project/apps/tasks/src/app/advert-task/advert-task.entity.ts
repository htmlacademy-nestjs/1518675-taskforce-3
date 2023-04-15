import {Category, Tag, Task} from '@project/shared/app-types';
import {Entity} from '@project/util/util-types';

export class AdvertTaskEntity implements Entity<AdvertTaskEntity>, Task {
  public id: number;
  public title: string;
  public description: string;
  public category: Category;
  public price: string;
  public image: string;
  public address: string;
  public tags: Tag[];
  public city: string;
  public createdAt: Date;
  public userId: string;

  constructor(advertTask: Task) {
    this.fillEntity(advertTask);
  }

  public fillEntity(advertTask: Task): void {
    this.id = advertTask.id;
    this.title = advertTask.title;
    this.description = advertTask.description;
    this.category = advertTask.category;
    this.price = advertTask.price;
    this.image = advertTask.image;
    this.address = advertTask.address;
    this.tags = [];
    this.city = advertTask.city;
    this.createdAt = new Date();
  }

  public toObject(): AdvertTaskEntity {
    return {
      ...this,
      tags: this.tags.map(({tagName}) => ({tagName})),
    };
  }
}
