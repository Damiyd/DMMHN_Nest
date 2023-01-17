import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsEmail()
  @IsNotEmpty()
  memberEmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  confirmPw: string;

  @IsString()
  @IsNotEmpty()
  memberName: string;

  @IsString()
  birth?: string;

  @IsString()
  @IsNotEmpty()
  job: string;

  @IsArray()
  @IsNotEmpty()
  stack: [];

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  validate: string;
}
