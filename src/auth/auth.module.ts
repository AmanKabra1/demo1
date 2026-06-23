import { PassportModule } from '@nestjs/passport';
import { Module } from "@nestjs/common";
import { PassportLocal } from "./passport.local.strategy";
import { UsersModule } from "src/users/users.module";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JWTStrategy } from './jwt.strategy';

@Module({
    imports: [PassportModule,UsersModule,JwtModule.register({
        secret:'ASD123###',
        signOptions: { expiresIn: '1h' }
    })],
    controllers: [],
    providers: [PassportLocal,LocalStrategy,AuthService,JWTStrategy],
    exports:[AuthService]
})
export class AuthModule{}