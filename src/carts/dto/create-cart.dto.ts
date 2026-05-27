import { IsArray, IsString } from 'class-validator';

export class CreateCartDTO {
  @IsString({ message: 'ID must be a string' })
  readonly id: string;

  @IsArray()
  @IsString({ each: true })
  readonly items: string[];
}
