import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwardsModule } from './awards/awards.module';

@Module({
  imports: [AwardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
