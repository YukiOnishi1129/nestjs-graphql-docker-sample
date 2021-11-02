import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
/* entities */
import { Book } from './entities/book.entity';
/* dto */
import { NewBookInput } from './dto/newBook.input';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}
  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOneById(id: number): Promise<Book> {
    return this.booksRepository.findOne(id);
  }

  async create(data: NewBookInput): Promise<Book> {
    const book = this.booksRepository.create(data);
    await this.booksRepository.save(book);
    return book;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.booksRepository.delete(id);
    return result.affected > 0;
  }
}
