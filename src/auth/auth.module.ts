import { UserModule } from './../../../n-fundamental/src/users/user.module';
import { Module } from "@nestjs/common";
import { PassportLocal } from "./passport.local.strategy";

@Module({
    imports: [UserModule],
    controllers: [],
    providers: [PassportLocal],
})
export class AuthModule{}