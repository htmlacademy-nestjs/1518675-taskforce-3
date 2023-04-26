import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigUploaderModule, getMongooseOptions} from '@project/config/config-uploader';
import {FileModule} from './file/file.module';
import {MongooseModule} from '@nestjs/mongoose';

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
