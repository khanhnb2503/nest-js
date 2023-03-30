import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDTo } from './dto';

@Injectable()
export class CategorysService {
   constructor(
      private prisma: PrismaService
   ){};

   async listCategory() {
      try {
         const result = await this.prisma.categorys.findMany({});
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async listOneCategory(id: number) {
      try {
         const result = await this.prisma.categorys.findMany({
            where: {id: id},
            include: {
               Products: true
            }
         });
         return result;
      } catch (error) {
         return error.message;
      }
   };

   async addCategory(categoryData: CategoryDTo) {
      try {
         const result = await this.prisma.categorys.create({
            data: {
               name: categoryData.name,
               Products:{
                  create: [
                     {
                        name: 'Rau muống',
                        price: 23.000,
                        description: 'Do mưa nhiều nên rau muống rất ngon...'
                     },
                     {
                        name: 'Xu hào',
                        price: 24.000,
                        description: 'Người dân Hà Nội đổ xô đi mua xu hào trái vụ...'
                     },
                     {
                        name: 'Hành tây',
                        price: 24.000,
                        description: 'Hà tĩnh cung cấp hành tây...'
                     }
                  ]
               }
            }
         })
         return result;
      } catch (error) {
         return error.message;
      }
   }
}
