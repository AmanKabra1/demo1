import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { BookGuard } from './book.guard';

@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}

    @Get("/findAll")
    @UseGuards(new BookGuard())
    findAllBooks():BookDto[]{
        return this.bookService.findAllBooksService()
    }

    @Post('create')
    addBook(@Body() book:BookDto):string{
        return this.bookService.addBookService(book);
    }
    
    @Put('/update')
    updateBook(@Body() book:BookDto):string{
        return this.bookService.updateBookService(book);
    }

    @Delete('delete/:id')
    deleteBook(@Param('id') bookId:string):string{
        return this.bookService.deleteBookService(bookId)
    }

    @Get('/:id')
    findBookById(@Param('id',ParseIntPipe)id:number){
        console.log(id,typeof(id))
        return 'book by id'
    }
 
    @Post('/add')
    addBooknew(@Body(new ValidationPipe())book:BookDto):string{
        return 'add book'
    }
}
