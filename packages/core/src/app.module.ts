import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwardsController } from './awards/awards.controller';
import { AwardsService } from './awards/awards.service';

@Module({
  imports: [],
  controllers: [AppController, AwardsController],
  providers: [AppService, AwardsService],
})
export class AppModule {}
