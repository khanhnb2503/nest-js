import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto } from './dto';

@Injectable()
export class PostService {
   constructor(
      private prisma: PrismaService
   ){};

   async listAllPost() {
      try {
         const result = await this.prisma
      } catch (error) {
         
      }
   };

   async listOnePost(id: number) {
      try {
         
      } catch (error) {
         
      }
   };

   async createPost(postData: PostDto) {
      try {
         
      } catch (error) {
         
      }
   };

   async updatePost(id: number, postData: PostDto) {
      try {
         
      } catch (error) {
         
      }
   };

   async deletePost(id: number) {
      try {
         
      } catch (error) {
         return error.message;
      }
   };

   async searchPost(keyword: string) {
      try {
         const result = await this.prisma
      } catch (error) {
         
      }
   };

}
