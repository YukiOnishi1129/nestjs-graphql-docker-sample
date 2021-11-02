import { Injectable } from '@nestjs/common';
/* entities */
import { Book } from './entities/book.entity';
/* dto */
import { NewBookInput } from './dto/newBook.input';

let books = [
  {
    id: 1,
    title: 'test 1',
    author: 'Joe',
    price: 1000,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'test 2',
    author: 'Maria',
    price: 2000,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'test 3',
    author: 'Smith',
    price: 3000,
    createdAt: new Date(),
  },
] as Book[];

@Injectable()
export class BooksService {
  findAll(): Promise<Book[]> {
    return Promise.resolve(books);
  }

  findOneById(id: number): Promise<Book> {
    const book = books.find((book) => book.id === id);
    return Promise.resolve(book);
  }

  create(data: NewBookInput): Promise<Book> {
    const book = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
    } as Book;
    books.push(book);

    return Promise.resolve(book);
  }

  async remove(id: number): Promise<boolean> {
    books = books.filter((book) => book.id !== id);
    return true;
  }
}
