import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategorysModule } from './categorys/categorys.module';
import { ProductsModule } from './products/products.module';
@Module({
   controllers: [AppController],
   providers: [AppService],
   imports: [
      UsersModule, 
      AuthModule, 
      PrismaModule, 
      CategorysModule, 
      ProductsModule
   ],
})
export class AppModule { }
