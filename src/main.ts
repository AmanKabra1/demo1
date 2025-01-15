import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddleware(req:Request,resp:Response,next:NextFunction){
  console.log('This is middleware')
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(globalMiddleware)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
