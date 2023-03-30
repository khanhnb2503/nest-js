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

import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('api')
export class ProductsController {
   constructor(
      private productService: ProductsService
   ) { };

   @Get('listProduct')
   async listProduct() {
      try {
         return this.productService.listAllProduct();
      } catch (error) {
         return error.message;
      }
   };

   @Get('listOneProduct:id')
   async listOneProduct(@Param('id', ParseIntPipe) id: number) {
      try {
         return this.productService.listOneProduct(id)
      } catch (error) {
         return error.message;
      }
   };

   @Post('addProduct')
   async addProduct(@Body() productData: ProductDto) {
      try {
        return await this.productService.addProduct(productData);
      } catch (error) {
         return error.message;
      }
   };

   @Put('updateProduct:id')
   async updateProduct(
      @Param('id', ParseIntPipe) id: number,
      @Body() productData: ProductDto
   ) {
      try {
         return this.productService.updateProduct(id,productData);
      } catch (error) {
         return error.message;
      }
   };

   @Delete('deleteProduct:id')
   async deleteProduct(@Param('id', ParseIntPipe) id: number) {
      try {
         return this.productService.deleteProduct(id);
      } catch (error) {
         return error.message;
      }
   };

   @Get('searchProduct:keyword')
   async searchProduct(@Param('keyword') keyword: string) {
      try {
         return this.productService.searchProduct(keyword)
      } catch (error) {
         return error.message;
      }
   }
}
