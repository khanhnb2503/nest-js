import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { UserDto, UserLoginDto } from './dto';


@ApiTags('Users')
@Controller('api')
export class UsersController {
   constructor(
      private usersService: UsersService
   ){};

   @Post('signIn')
   async signIn(@Body() userData: UserLoginDto) {
      try {
         return this.usersService.signIn(userData);
      } catch (error) {
         return error.message;
      }
   };

   @Post('signUp')
   async signUp(@Body() userData: UserDto) {
      try {
         return this.usersService.signUp(userData);
      } catch (error) {
         return error.message;
      }
   };
}
