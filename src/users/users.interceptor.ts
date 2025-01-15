import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Request } from "express";
import { map, Observable } from "rxjs";

export class UserInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log('This is the interceptor')
        const ctx=context.switchToHttp()
        const request=ctx.getRequest<Request>()
        request.body.name='this is the name'
        request.body.age=22
        request.body.city='Noida,UttarPradesh'
        return next.handle().pipe(map((data)=>{
            data='from interceptor'
            return data
        }))
    }
}