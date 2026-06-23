import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constant';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}
  

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(): string {
    // return this.appService.getHello();
    return 'this is private data'
  }

  @Get('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request()req):string{
    // return 'login page'

    //authentication complete
    //next step authorize
    //id card issue JWT-Token
    // return req.user

    return this.authService.generateToken(req.user)

  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(@Request() req):string{
    return 'This is private data for android developer '+ JSON.stringify(req.user)
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(@Request() req):string{
    return 'This is private data for web developer '+ JSON.stringify(req.user)
  }

  @Post('')
  helloWorld():string{
    return 'this is a post request'
  }
}
