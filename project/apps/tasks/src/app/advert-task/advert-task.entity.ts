import {Task} from '@project/shared/app-types';

export class AdvertTaskEntity implements Task {
  public _id: string;
  public title: string;
  public description: string;
  public category: string;
  public price: string;
  public image: string;
  public address: string;
  public tags: string;
  public city: string;

  constructor(advertTask: Task) {
    this.fillEntity(advertTask);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertTask: Task) {
    this._id = advertTask._id;
    this.title = advertTask.title;
    this.description = advertTask.description;
    this.category = advertTask.category;
    this.price = advertTask.price;
    this.image = advertTask.image;
    this.address = advertTask.address;
    this.tags = advertTask.tags;
    this.city = advertTask.city;
  }

  // public async setPassword(password: string): Promise<AdvertTaskEntity> {
  //   const salt = await genSalt(SALT_ROUNDS);
  //   this.passwordHash = await hash(password, salt);
  //   return this;
  // }

  // public async comparePassword(password: string): Promise<boolean> {
  //   return compare(password, this.passwordHash);
  // }
}
