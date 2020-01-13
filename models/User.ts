import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Messagges } from './Messages';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('varchar')
  username: string | undefined;

  @Column('int')
  age: number | undefined;

  @OneToMany(
    type => Messagges,
    messagge => messagge.user
  )
  messagges: Messagges[] | undefined;
}
