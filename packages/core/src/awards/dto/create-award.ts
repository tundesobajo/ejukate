import { IsString } from 'class-validator';

export class CreateAwardDto {
  @IsString()
  id: string;

  @IsString()
  name: string;
}
