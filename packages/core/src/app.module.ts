import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwardsController } from './awards/awards.controller';

@Module({
  imports: [],
  controllers: [AppController, AwardsController],
  providers: [AppService],
})
export class AppModule {}
