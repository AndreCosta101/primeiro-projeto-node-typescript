/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // passando vazio, ele usa varchar
  name: string;

  @Column() // passando vazio, ele usa varchar
  email: string;

  @Column() // passando vazio, ele usa varchar
  password: string;

  @Column() // passando vazio, ele usa varchar
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default User;
