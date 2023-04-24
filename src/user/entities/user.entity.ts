import {
  ObjectId,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ type: 'string', nullable: false })
  fullname: string;

  @Column({ type: 'string', nullable: false })
  email: string;

  @Column({ type: 'string', nullable: false })
  username: string;

  @Column({ type: 'string', nullable: false })
  password: string;

  @Column('simple-json')
  verified: { value: boolean; updatedAt: Date };

  @Column('simple-json')
  banner: { url: string; updatedAt: Date };

  @Column('simple-json')
  avatar: { url: string; approved: boolean; updatedAt: Date };

  @Column('simple-json')
  premium: { value: boolean; updatedAt: Date };

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;
}
