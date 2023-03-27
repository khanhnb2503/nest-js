import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthDto {
   @IsNotEmpty()
   username: string;

   @IsEmail()
   @IsNotEmpty()
   email: string;

   @IsNotEmpty()
   password: string;
}