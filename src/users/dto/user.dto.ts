import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
   @IsNotEmpty()
   username: string;

   @IsEmail()
   @IsNotEmpty()
   email: string;

   @IsNotEmpty()
   password: string;
};


export class UserLoginDto {
   @IsEmail()
   @IsNotEmpty()
   email: string;

   @IsNotEmpty()
   password: string;
}