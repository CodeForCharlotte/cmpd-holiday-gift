import { Affiliation } from './affiliation';
import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Household } from './household';
import AbstractUser from './abstract/user';

@Entity('users')
export class Nominator extends AbstractUser {
  private constructor(props) {
    super();

    Object.assign(this, props);
  }

  @Column('text', { nullable: true })
  rank: string;

  @Column('text', { nullable: true })
  phone: string;

  @Column('int', { name: 'affiliation_id', nullable: true })
  affiliationId: number;

  @OneToOne(() => Affiliation)
  @JoinColumn({ name: 'affiliation_id' })
  affiliation: Affiliation;

  @Column('int', { name: 'nomination_limit', default: 5 })
  nominationLimit: number;

  @OneToMany(() => Household, household => household.nominator)
  households: Household[];
}