import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';

import { Award } from '../type/Award';
import { AwardsService } from '../awards.service';

@Injectable()
export class AwardByIdPipe implements PipeTransform<string, Award> {
  constructor(private awardsService: AwardsService) {}

  transform(id: string): Award {
    const award = this.awardsService.findOne(id);
    if (!award) {
      throw new NotFoundException(`Award with id "${id}" not found`);
    }
    return award;
  }
}
