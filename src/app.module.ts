import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { HelpersModule } from './helpers/helpers.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
@Module({
  imports: [CatsModule, HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {
}
