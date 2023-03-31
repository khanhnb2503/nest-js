import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { LocalStrategy } from './strategies/local.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
   imports: [
      PassportModule,
      JwtModule.register({
         secret: 'JSON_TOKEN_KEY_SECRET',
         signOptions: {
            expiresIn: '10 minutes'
         }
      })
   ],
   providers: [AuthService],
   controllers: [AuthController]
})
export class AuthModule { }
