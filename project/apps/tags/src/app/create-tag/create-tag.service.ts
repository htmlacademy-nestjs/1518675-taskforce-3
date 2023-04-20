import {Injectable} from '@nestjs/common';
import {CreateTagDto} from './dto/create-tag.dto';
import {AdvertTagEntity} from '../advert-tag/advert-tag.entity';
import {AdvertTagRepository} from './advert-tag.repository';

@Injectable()
export class CreateTagService {
  constructor(
    private readonly advertTagRepository: AdvertTagRepository
  ) {}

  public async createTag(dto: CreateTagDto) {
    const {tagName} = dto;

    const advertTag = {
      tagName
    };

    const existTag = await this.advertTagRepository
      .findByTagName(tagName);

    if (existTag) {
      return;
    }

    const tagEntity = await new AdvertTagEntity(advertTag);

    return this.advertTagRepository
      .create(tagEntity);
  }

  public async getTags() {

  }
}
