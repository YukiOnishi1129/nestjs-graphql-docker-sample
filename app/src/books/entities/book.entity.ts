import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  // UpdateDateColumn,
  // OneToMany,
} from 'typeorm';

@ObjectType({ description: 'Book model' })
@Entity('books')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({
    nullable: false,
    length: 255,
  })
  @Field({ nullable: false, description: '本のタイトル' })
  title: string;

  @Column({
    nullable: false,
    length: 255,
  })
  @Field({ nullable: false, description: '著者' })
  author: string;

  @Column({
    nullable: false,
  })
  @Field(() => Int, { nullable: false, description: '価格(円)' })
  price: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Field()
  createdAt: Date;
}
