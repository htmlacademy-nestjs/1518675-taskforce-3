import { Module } from '@nestjs/common';
import {AdvertTagModule} from './advert-tag/advert-tag.module';
import {CreateTagModule} from './create-tag/create-tag.module';

@Module({
  imports: [AdvertTagModule, CreateTagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
