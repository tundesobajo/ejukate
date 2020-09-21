import { Injectable } from '@nestjs/common';

import { Award } from './type/Award';
import { AwardQuery } from './type/AwardQuery';

@Injectable()
export class AwardsService {
  private readonly awards: Award[] = [];

  create(award: Award): void {
    this.awards.push(award);
  }

  findAll(query?: AwardQuery): Award[] {
    console.log(query); // eslint-disable-line no-console
    return this.awards;
  }

  findOne(id: string): Award | null {
    return this.awards.find(a => a.id === id) || null;
  }

  update(id: string, award: Partial<Award>): Award {
    throw new Error('not yet implemented');
  }

  delete(id: string): unknown {
    throw new Error('not yet implemented');
  }
}
