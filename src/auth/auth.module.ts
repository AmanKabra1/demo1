import { Module } from "@nestjs/common";
import { PassportLocal } from "./passport.local.strategy";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [UsersModule],
    controllers: [],
    providers: [PassportLocal],
})
export class AuthModule{}