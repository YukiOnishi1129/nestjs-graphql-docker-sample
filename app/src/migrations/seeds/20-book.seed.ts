import { Factory, Seeder } from 'typeorm-seeding';
/* entities */
import { Book } from '../../books/entities/book.entity';

export default class CreateBooks implements Seeder {
  public async run(factory: Factory) {
    await factory(Book)().createMany(3);
  }
}
