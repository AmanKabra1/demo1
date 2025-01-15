import { validate } from 'class-validator';
import { UserService } from 'src/users/users.service';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from 'src/users/user.entity';
import { UnauthorizedException } from '@nestjs/common';

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService:UserService){
        super()
    }

    validate(username:string,password:string):User{
        const user:User= this.userService.getUserByName(username)
        if(user == undefined){
            throw new UnauthorizedException()
        }

        if(user!= undefined && user.password == password){
            return user
        }
    }
}