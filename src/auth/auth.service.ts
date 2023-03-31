import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
const bcrypt = require('bcrypt');

import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto,signDto } from './dto';

@Injectable()
export class AuthService {
   constructor(
      private prisma: PrismaService,
      private jwtService: JwtService
   ) {};

   async signUp(userData: AuthDto) {
      try {
         const users = await this.prisma.users.findMany({
            where: {
               username: userData.username
            }
         });

         // Check username database
         if(users[0]) {
            throw new ConflictException('Username already exists');
         };

         const hash = await bcrypt.hashSync(userData.password, 10);
         const result = await this.prisma.users.create({
            data: {
               username: userData.username,
               email: userData.email,
               password: hash
            }
         });
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async signIn(userData: signDto) {
      try {
         const users = await this.prisma.users.findMany({
            where: {
               username: userData.username
            }
         });

         if(!users[0]) {
            throw new ConflictException('Username already exists');
         };

         const verifyPassword = bcrypt.compareSync(userData.password,users[0].password);
         if(!verifyPassword) {
            throw new ConflictException('Password invalid');
         };

         const accessTokenKey = this.jwtService.sign({sub: users[0].username});
         return {
            accessTokenKey:accessTokenKey
         }
         
      } catch (error) {
         return error.message;
      }
   };

   async validateUserAndPassword(username: string) {
      try {

         const  users = await this.prisma.users.findMany({
            where: {
               username: username,
            }
         })
      } catch (error) {
         return error.message;
      }
   }
}
