import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';


@Controller('api')
export class AuthController {
   constructor(
      private authService: AuthService,
   ) {};
}
