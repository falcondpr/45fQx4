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

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;
}
