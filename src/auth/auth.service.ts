import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
var bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
   constructor(
      private prisma: PrismaService
   ) {};

   async signIn(user: AuthDto) {
      try {
         const hash =  bcrypt.hashSync(user.password, 10);
         const users = await this.prisma.users.create({
            data: {
               username: user.username,
               email: user.email,
               password: hash
            },
         });
         delete users.password;
         return users;
      } catch (error) {
         return error.message;
      }
   };

   async singUp() {

   };

   async listAllUsers() {
      try {
         const result = await this.prisma.users.findMany();
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async updateUser(id: any, userData: AuthDto) {
      try {
         const result = await this.prisma.users.update({
            where: {id: 6},
            data: {
               username: userData.username,
               email: userData.email,
               password: userData.password
            }
         });
         return result;
      } catch (error) {
         return error.message;
      }
   }

   async searchUserByName(keyword: string) {
      try {
         const result = await this.prisma.users.findMany({
            where: {
               OR: [
                  {username: {contains: keyword}},
                  {email: {contains: keyword}}
               ]
            }
         });

         return result;
      } catch (error) {
         return error.message;
      }
   }
}
