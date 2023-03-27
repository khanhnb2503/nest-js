import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
   controllers: [AppController],
   providers: [AppService],
   imports: [UsersModule, AuthModule, PrismaModule, PostModule],
})
export class AppModule { }
