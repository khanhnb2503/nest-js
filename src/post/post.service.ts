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
         const result = await this.prisma.posts.findMany();
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async listOnePost(id: number) {
      try {
         const result = await this.prisma.posts.findMany({
            where: {id: id}
         });
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async createPost(postData: PostDto) {
      try {
         const result = await this.prisma.posts.create({
            data: {
               title: postData.title,
               description: postData.description
            }
         });
         
         return result;
      } catch (error) {
         return error.message;
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
