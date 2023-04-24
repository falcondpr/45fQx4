import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
} from 'typeorm';
import { STATUS_POST, STATUS_PRODUCT } from '../enum/product.enum';

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ type: 'string', nullable: false })
  title: string;

  @Column({ type: 'string', nullable: false })
  description: string;

  @Column({ type: 'string', nullable: true })
  businessId?: string;

  @Column({ type: 'number', nullable: false })
  price: number;

  @Column({ type: 'string', nullable: false })
  ownerId: string;

  @Column({ type: 'array', nullable: false })
  images: string[];

  @Column({
    type: 'enum',
    enum: STATUS_PRODUCT,
  })
  productStatus: STATUS_PRODUCT;

  @Column('simple-json')
  statusPost: { value: STATUS_POST; updatedAt: Date };

  @Column('simple-json')
  location: { city: string; country: string; state: string };

  @Column('simple-json')
  details: { brand: string; model: string; year?: number };

  @Column({ type: 'array' })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  updatedAt?: Date;
}
