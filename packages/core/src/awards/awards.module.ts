import { Module } from '@nestjs/common';
import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';
import { AwardByIdPipe } from './pipes/award-by-id.pipe';

@Module({
  controllers: [AwardsController],
  providers: [AwardsService, AwardByIdPipe],
})
export class AwardsModule {}
