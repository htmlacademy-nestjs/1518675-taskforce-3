import {Module} from '@nestjs/common';
import {AdvertTagModule} from './advert-tag/advert-tag.module';
import {CreateTagModule} from './create-tag/create-tag.module';
import {PrismaModule} from './prisma/prisma.module';

@Module({
  imports: [AdvertTagModule, CreateTagModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
