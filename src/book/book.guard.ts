import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class BookGuard implements CanActivate{

    public key:string='AAA1234$%%%'

    canActivate(context: ExecutionContext): boolean {
        const ctx=context.switchToHttp()
        const request=ctx.getRequest<Request>()

        return true
    }
}