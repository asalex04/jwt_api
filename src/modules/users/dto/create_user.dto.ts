import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'mailing address' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'root123', description: 'user password' })
  @IsString()
  readonly password: string;
}
