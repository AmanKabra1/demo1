import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local";
import { User } from "src/users/user.entity";
import { UserService } from "src/users/users.service";

@Injectable()
export class PassportLocal extends PassportStrategy(Strategy){
    constructor(private readonly userService:UserService){
        super()
    }

    async validate(username:string,passward:string):Promise<User>{
        const user=this.userService.getUserByName(username)
        if(user==undefined)  throw new UnauthorizedException()
        
        if(user.password == passward) return user
    }
}