import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
    public books:BookDto[]=[]

    //add
    addBookService(book:BookDto):string{
        this.books.push(book)
        return 'Book added successfully'
    }

    //update
    updateBookService(book:BookDto):string{
        const index=this.books.findIndex((currentBook)=>{
            return currentBook.id===book.id
        })
        this.books[index]=book
        return 'Book has been update'
    }

    //delete
    deleteBookService(bookId:string):string{
        this.books=this.books.filter((book)=>{
            return book.id!=bookId
        })
        return 'Book deleted'
    }

    //all
    findAllBooksService():BookDto[]{
        return this.books
    }

}
