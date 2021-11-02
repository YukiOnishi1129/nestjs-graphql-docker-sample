import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
/* entities */
import { Book } from '../../books/entities/book.entity';

define(Book, (faker: typeof Faker) => {
  const book = new Book();
  book.title = `${faker.lorem.word()}`;
  book.author = `${faker.name.findName()}`;
  book.price = Math.random() * (10000 - 100) + 100;
  return book;
});
