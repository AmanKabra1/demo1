import { IsInt, IsString } from "class-validator"

export class BookDto{
    @IsInt()
    id:string

    @IsString()
    title:string

    @IsString()
    author:string

    @IsInt()
    price:number
}