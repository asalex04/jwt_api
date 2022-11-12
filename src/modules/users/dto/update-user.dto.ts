import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly about: string;
}
