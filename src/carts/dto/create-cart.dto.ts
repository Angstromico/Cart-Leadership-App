import { IsArray, IsString } from 'class-validator';

export class CreateCartDTO {
  @IsString()
  readonly id: string;

  @IsArray()
  @IsString({ each: true })
  readonly items: string[];
}
