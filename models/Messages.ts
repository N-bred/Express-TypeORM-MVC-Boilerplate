import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({ name: 'Messagges' })
export class Messagges {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('varchar')
  content: string | undefined;

  @ManyToOne(
    type => User,
    user => user.messagges
  )
  user: User | undefined;
}
