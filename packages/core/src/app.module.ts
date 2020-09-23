import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwardsModule } from './awards/awards.module';

@Module({
  imports: [AwardsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('awards');
  }
}
