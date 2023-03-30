import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
   constructor(
      private prisma: PrismaService
   ){};

   async listAllProduct() {
      try {
         const result = await this.prisma.products.findMany({
            include: {
               categorys: true
            },
            orderBy: {
               id: 'desc'
            }
         });
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async listOneProduct(id:number) {
      try {
         const result = await this.prisma.products.findUnique({
            where: {id: id},
            select: {
               name: true,
               description: true,
               categorys: true
            },
         });
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async addProduct(productData: ProductDto) {
      try {
         const result = await this.prisma.products.create({
            data: {
               name: productData.name,
               price: Number(productData.price),
               description: productData.description,
               categoryId: 1,
            }
         })
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async updateProduct(id: number,productData: ProductDto) {
      try {
         const result = await this.prisma.products.update({
            where: {id: id},
            data: {

            }
         });
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async deleteProduct(id: number) {
      try {
         const result = await this.prisma.products.delete({
            where: {id: id},
         });
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async searchProduct(keyword: string) {
      try {
         const result = await this.prisma.products.findMany({
            where: {
               OR: [
                  {name: {contains: keyword}},
                  {description: {contains: keyword}},
               ],
            },
         });

         return result;
      } catch (error) {
         return error.message;
      }
   }
}
