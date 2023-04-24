import {
  ObjectId,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class Business {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ type: 'string', nullable: false })
  name: string;

  @Column({ type: 'string', nullable: false })
  banner: string;

  @Column('simple-json')
  verified: { value: boolean; updatedAt: Date };

  @Column({ type: 'string', nullable: false })
  avatar: string;

  @Column({ type: 'string', nullable: false })
  category: string;

  @Column('simple-array')
  tags: string[];

  @Column({ type: 'string', nullable: false })
  username: string;

  @Column('simple-array')
  ownerId: string[];

  @Column('simple-json')
  location: { state: string; city: string; country: string };

  @Column('simple-json')
  address: { name: string; latitude: string; longitude: string };

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;
}
