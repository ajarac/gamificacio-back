import { Avatar } from './avatar';
import { School } from './school';
import { Questionnaire } from './questionnaire';
import { Point } from './point';
import { CollectionCard } from './collection-card';
import { Badge } from './badge';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Group } from './group';

@Entity()
export class Teacher extends BaseEntity {
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

	@OneToMany(() => Badge, (badge) => badge.teacher)
	public badges: Badge[];

	@ManyToMany(() => CollectionCard, (cCard) => cCard.teachers)
	public collectionCards: CollectionCard[];

	@OneToMany(() => Group, (group) => group.teacher)
	public groups: Group[];

	@OneToMany(() => Point, (point) => point.teacher)
	public points: Point[];

	@OneToMany(() => Questionnaire, (q) => q.teacher)
	public questionnaires: Questionnaire[];

	@ManyToOne(() => School, (school) => school.teachers)
	public school: School;

	@ManyToOne(() => Avatar, (avatar) => avatar.teachers)
	public avatar: Avatar;
}
