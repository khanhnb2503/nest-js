import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto';

ApiTags('Users')
@Controller('api')
export class AuthController {
   constructor(
      private authService: AuthService,
   ) {};

   @Post('signIn')
   async signIn(@Body() userData: AuthDto) {
      return this.authService.signIn(userData);
   };

   @Post('signUp')
   async signUp(@Body() userData: AuthDto) {
      
   };

   @Get('listUsers')
   async listAllUser() {
      try {
         return this.authService.listAllUsers();
      } catch (error) {
         return error.message;
      }
   };

   @Put('updateUser:id')
   async updateUser(@Param('id') id: any, @Body() useData: AuthDto) {
      try {
         return this.authService.updateUser(id,useData)
      } catch (error) {
         return error.message;
      }
   }

   @Get('userSearch:keyword')
   async searchUserByName(@Param('keyword') keyword: string){
      try {
         return this.authService.searchUserByName(keyword);
      } catch (error) {
         return error.message;
      }
   }
}
