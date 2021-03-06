/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

/**
 * Um para Um (One to One)
 * Um para Muitos (One to Many)
 * Muitos para Muitos (Many to Many)
 */

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // passando vazio, ele usa varchar
  provider_id: string;

  // a referência do relacionamento é o Appointment, portanto ManyToOne
  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column() // passando vazio, ele usa varchar
  user_id: string;

  // a referência do relacionamento é o Appointment, portanto ManyToOne
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Appointment;
