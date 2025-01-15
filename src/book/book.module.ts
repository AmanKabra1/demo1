import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { bookMidddleware } from './book.middleware';

@Module({
    imports:[],
    controllers:[BookController],
    providers:[BookService],
})
export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(bookMidddleware).forRoutes('book')
    }
}
