import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Message {
  @ObjectIdColumn()
  id: ObjectId;

  @ObjectIdColumn()
  idTeam: ObjectId;

  @ObjectIdColumn()
  idUserTransmitter: ObjectId;

  @ObjectIdColumn()
  idUserReceiver: ObjectId;

  @Column({ type: 'string', nullable: false })
  content: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'date', default: new Date().toISOString() })
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  updatedAt: Date;
}
