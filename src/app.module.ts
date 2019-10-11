import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UtilsHelpers }from './helpers/UtilsHelpers';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, UtilsHelpers],
})
export class AppModule {}
