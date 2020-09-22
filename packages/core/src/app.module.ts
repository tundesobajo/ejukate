import { MiddlewareConsumer, Module } from '@nestjs/common';

import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwardsModule } from './awards/awards.module';

@Module({
  imports: [AwardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('awards');
  }
}
