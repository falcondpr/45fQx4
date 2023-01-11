import { PrimaryGeneratedColumn, Column } from 'typeorm'

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'boolean', default: true })
  isActive: boolean

  @Column({ type: 'string' })
  username: string

  @Column({ type: 'string' })
  email: string

  @Column({ type: 'string' })
  name: string
}
