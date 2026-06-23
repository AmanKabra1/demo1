import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpModule } from './emp/emp.module';

@Module({
  imports: [UsersModule, BookModule, AuthModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'.local.env',
      //envFilePath:'.prod.env',
    }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aman',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,

  }),
  EmpModule
  // TypeOrmModule.forRootAsync({
  //   imports:[ConfigModule],
  //   useFactory: async (configService: ConfigService)=>({
  //     type:'postgres',
  //     host:configService.get('DB_HOST'),
  //     port:configService.get<number>('DB_PORT'),
  //     username:configService.get<string>('DB_USERNAME'),
  //     password:'aman',
  //     database:configService.get<string>('DB_DATABASE'),
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize:configService.get<boolean>('DB_SYNC'),
  //   }),
  //   inject:[ConfigService],
  // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 