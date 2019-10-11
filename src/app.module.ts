import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { HelpersModule } from './helpers/helpers.module';
@Module({
  imports: [CatsModule, HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
