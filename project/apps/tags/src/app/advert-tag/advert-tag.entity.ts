import {Tag} from '@project/shared/app-types';

export class AdvertTagEntity implements Tag {
  public _id: string;
  public tagName: string;

  constructor(advertTag: Tag) {
    this.fillEntity(advertTag);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertTag: Tag) {
    this._id = advertTag._id;
    this.tagName = advertTag.tagName;
  }
}
