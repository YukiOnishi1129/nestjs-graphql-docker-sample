import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@ObjectType()
@Entity('books')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({
    nullable: false,
    length: 255,
  })
  @Field()
  title: string;

  @Column({
    nullable: false,
    length: 255,
  })
  @Field()
  author: string;

  @Column({
    nullable: false,
  })
  @Field((type) => Int)
  price: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Field()
  createdAt: Date;
}
