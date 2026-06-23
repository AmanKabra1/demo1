import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  exports:[UserService]
})
export class UsersModule {
  constructor(private readonly configService:ConfigService){}
}
