import { IsString } from 'class-validator';

export class UpdateAwardDto {
  @IsString()
  name: string;
}
