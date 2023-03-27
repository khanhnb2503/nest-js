import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { PostDto } from './dto';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';

ApiTags('Posts')
@Controller('api')
export class PostController {
   constructor(
      private postService: PostService
   ){};

   @Get('listAllPost')
   async listAllPost() {
      try {
         return await this.postService.listAllPost();
      } catch (error) {
         return error.message;
      }
   };

   @Get('listOnePost:id')
   async listOnePost(@Param('id') id: number) {
      try {
         return this.postService.listOnePost(id);
      } catch (error) {
         return error.message;
      }
   };

   @Post('createPost')
   async createPost(@Body() postData: PostDto) {
      try {
         return this.postService.createPost(postData);
      } catch (error) {
         return error.message;
      }
   };

   @Put('updatePost:id')
   async updatePost(@Param('id') id: number, @Body() postData: PostDto) {
      try {
         return this.postService.updatePost(id, postData);
      } catch (error) {
         return error.message;
      }
   };

   @Delete('deletePost:id')
   async deletePost(@Param('id') id: number) {
      try {
         return this.postService.deletePost(id);
      } catch (error) {
         return error.message;
      }
   };

   @Get('searchPost:keyword')
   async searchPost(@Param('keyword') keyword: string){
      try {
         return this.postService.searchPost(keyword);
      } catch (error) {
         return error.message;
      }
   }
}
