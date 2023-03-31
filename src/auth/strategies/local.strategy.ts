import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(
      private readonly authService: AuthService
   ) {
      super({
         username: 'users'
      })
   };

   
   validateUserAndPassword(username: string) {
      const users = this.authService.validateUserAndPassword(username);
      if(!users) {
         throw new UnauthorizedException('Username in valid');
      };

      return users;
   }
}