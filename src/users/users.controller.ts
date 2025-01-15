import { Controller, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { UserInterceptor } from './users.interceptor';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    @Post('')
    @UseInterceptors(UserInterceptor)
    UserHello(@Req() req:Request,@Res() res:Response):any{
        //return res.json(req.body)
        //return res.send('This is the response')
        return 'This is the response'
    }
}
