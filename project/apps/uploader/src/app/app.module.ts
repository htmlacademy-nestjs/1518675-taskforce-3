import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigUploaderModule} from '@project/config/config-uploader';
import {FileModule} from './file/file.module';
import {MongooseModule} from '@nestjs/mongoose';
import {getMongooseOptions} from '@project/config/config-users';

@Module({
  imports: [
    FileModule,
    ConfigUploaderModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
