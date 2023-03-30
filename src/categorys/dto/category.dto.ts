import { IsNotEmpty } from "class-validator";

export class CategoryDTo {
   @IsNotEmpty()
   name: string;
   products: []
}