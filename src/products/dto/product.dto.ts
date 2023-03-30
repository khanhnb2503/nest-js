import { IsNotEmpty } from "class-validator";

export class ProductDto {
   @IsNotEmpty()
   name: string;

   @IsNotEmpty()
   price: number;

   @IsNotEmpty()
   description: string;
}