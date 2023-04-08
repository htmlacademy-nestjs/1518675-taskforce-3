import {Module} from '@nestjs/common';
import {AdvertUserMemoryRepository} from './advert-user-memory.repository';
import {MongooseModule} from '@nestjs/mongoose';
import {AdvertUserModel, AdvertUserSchema} from './advert-user.model';
import {AdvertUserRepository} from './advert-user.repository';

@Module({
  imports: [MongooseModule.forFeature([
    {name: AdvertUserModel.name, schema: AdvertUserSchema}
  ])],
  providers: [AdvertUserRepository],
  exports: [AdvertUserRepository]
})
export class AdvertUserModule {
}
