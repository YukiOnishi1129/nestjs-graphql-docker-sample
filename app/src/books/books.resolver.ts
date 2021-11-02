import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
/* services */
import { BooksService } from './books.service';
/* entities */
import { Book } from './entities/book.entity';
/* dto */
import { NewBookInput } from './dto/newBook.input';

// @Resolver: リゾルバを示すdecorator
// 引数にリゾルバに対応するmodelのクラスを定義する必要あり
@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  // @Query: クエリハンドラを示すdecorator
  // オプションに返り値の型を定義
  @Query(() => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query(() => Book)
  // @Args: 引数を定義するdecorator
  // リクエストから引数を抽出できる
  async getBook(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Mutation(() => Book)
  addBook(@Args('newBook') newBook: NewBookInput): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Mutation(() => Boolean)
  async removeBook(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.booksService.remove(id);
  }
}
