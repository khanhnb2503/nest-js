import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
var bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
   constructor(
      private prisma: PrismaService
   ) {};
   
}
