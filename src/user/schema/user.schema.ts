import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('users')
export class User {
  @Column({ type: 'string', nullable: false })
  id: string;

  @Column({ type: 'string', nullable: false })
  fullname: string;

  @Column({ type: 'string', nullable: false })
  email: string;

  @Column({ type: 'string', nullable: false })
  username: string;

  @Column({ type: 'string', nullable: false })
  password: string;

  @Column({ type: 'string', nullable: false })
  type: string;

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
