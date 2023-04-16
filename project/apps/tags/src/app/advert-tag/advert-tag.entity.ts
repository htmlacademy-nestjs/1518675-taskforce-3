import {Tag} from '@project/shared/shared-types';

export class AdvertTagEntity implements Tag {
  public tagId: number;
  public tagName: string;

  constructor(advertTag: Tag) {
    this.fillEntity(advertTag);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(advertTag: Tag) {
    this.tagId = advertTag.tagId;
    this.tagName = advertTag.tagName;
  }
}
