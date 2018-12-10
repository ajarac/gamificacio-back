import { Questionnaire } from './questionnaire';
import { Point } from './point';
import { CollectionCard } from './collection-card';
import { Avatar } from './avatar';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { School } from './school';
import { Badge } from './badge';
import { Card } from './card';
import { Group } from './group';

@Entity()
export class Student extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public surname: string;

	@Column('varchar', { length: 512 })
	public realm: string;

	@Column('varchar', { length: 512 })
	public username: string;

	@Column('varchar', { length: 512 })
	public password: string;

	@Column('text') public credentials: string;

	@Column('text') public challenges: string;

	@Column('varchar', { length: 512 })
	public email: string;

	@Column('tinyint') public emailVerified: boolean;

	@Column('varchar', { length: 512 })
	public verificationToken: string;

	@Column('varchar', { length: 512 })
	public status: string;

	@Column('datetime') public created: Date;

	@Column('datetime') public lastUpdate: Date;

	@ManyToOne(() => Avatar, (avatar) => avatar.students)
	public avatar: Avatar;

	@ManyToMany(() => Badge, (badge) => badge.students)
	public badges: Badge[];

	@ManyToMany(() => Card, (card) => card.students)
	public cards: Card[];

	@ManyToMany(() => CollectionCard, (card) => card.students)
	public collectionCards: CollectionCard[];

	@ManyToMany(() => Group, (group) => group.students)
	public groups: Group[];

	@OneToMany(() => Point, (point) => point.student)
	public points: Point[];

	@OneToMany(() => Questionnaire, (q) => q.student)
	public questionnaires: Questionnaire[];

	@ManyToOne(() => School, (school) => school.students)
	public school: School;
}
