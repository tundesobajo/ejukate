import { IsNumberString } from 'class-validator';

export class AwardQueryDto {
  @IsNumberString()
  limit: string;
}
