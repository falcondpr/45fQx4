import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ type: 'string', nullable: false })
  title: string;

  @Column({ type: 'string', nullable: false })
  description: string;

  @Column({ type: 'number', nullable: false })
  price: number;

  @Column({ type: 'string', nullable: false })
  ownerId: string;

  @Column({ type: 'array', nullable: false })
  images: string[];

  @Column({ type: 'string', nullable: false })
  productStatus: string;

  @Column('simple-json')
  status: { value: string; updatedAt: Date };

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
