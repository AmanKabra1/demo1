import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(): string {
    // return this.appService.getHello();
    return 'this is private data'
  }

  @Post('')
  helloWorld():string{
    return 'this is a post request'
  }
}
