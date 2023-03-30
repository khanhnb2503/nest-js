import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto,UserLoginDto } from './dto';
import * as argon2 from "argon2";
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
   constructor(
      private prisma: PrismaService
   ){};

   async signIn(userData: UserLoginDto) {
      try {
         const users = await this.prisma.users.findMany({
            where: {
               email: userData.email
            }
         });
         
         if(!users) {
            return 'Email not exist'
         };

         if(users) {
            const { password } = users[0];
            const comparePassword = await bcrypt.compare(userData.password, password);

            if(!comparePassword) {
               return "Password is not exist";
            }
            return "Login successfully"
         }

      } catch (error) {
         return error.message;
      }
   };

   async signUp(userData: UserDto) {
      try {
         const hash = await bcrypt.hashSync(userData.password, 10);
         const users = await this.prisma.users.create({
            data:{
               username: userData.username,
               email: userData.email,
               password: hash
            }
         });
         return users;
      } catch (error) {
         return error.message;
      }
   }
}
