import { Controller, Post, Body, Get, Put, Param, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthDto, signDto } from './dto';

@ApiTags('Auth')
@Controller('api')
export class AuthController {
   constructor(
      private authService: AuthService,
   ) {};

   @Post('signUp')
   async signUp(@Body() userData: AuthDto){
      try {
         return this.authService.signUp(userData);
      } catch (error) {
         return error.message;
      }
   };

   @Post('signIn')
   async signIn(@Body() userData: signDto) {
      try {
         return this.authService.signIn(userData);
      } catch (error) {
         return error.message;
      }
   }
}
