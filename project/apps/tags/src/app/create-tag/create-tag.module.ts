import {Module} from '@nestjs/common';
import {AdvertTagModule} from '../advert-tag/advert-tag.module';
import {CreateTagService} from './create-tag.service';
import {CreateTagController} from './create-tag.controller';

@Module({
  imports: [AdvertTagModule],
  controllers: [CreateTagController],
  providers: [CreateTagService],
  exports: [CreateTagService]
})
export class CreateTagModule {
}
