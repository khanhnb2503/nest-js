import { 
   Controller, 
   Get, 
   Post, 
   Put, 
   Param, 
   Body, 
   Delete, 
   ParseIntPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryDTo } from './dto';
import { CategorysService } from './categorys.service';

@ApiTags('Categorys')
@Controller('api')
export class CategorysController {
   constructor(
      private categoryService: CategorysService
   ){};

   @Get('listCategory')
   async listCategory() {
      try {
         return this.categoryService.listCategory();
      } catch (error) {
         return error.message;
      }
   };

   @Get('listOneCategory:id')
   async listOneCategory(@Param('id', ParseIntPipe) id: number ) {
      try {
         return this.categoryService.listOneCategory(id);
      } catch (error) {
         return error.message;
      }
   };

   @Post('addCategory')
   async addCategory(@Body() categoryData: CategoryDTo) {
      try {
        return this.categoryService.addCategory(categoryData);
      } catch (error) {
         return error.message;
      }
   }
}
