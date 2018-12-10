import { Questionnaire } from './questionnaire';
import { Point } from './point';
import { CollectionCard } from './collection-card';
import { Avatar } from './avatar';
import { Entity, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { School } from './school';
import { Badge } from './badge';
import { Card } from './card';
import { Group } from './group';
import { User, IUser } from './user';

@Entity()
export class Student extends User {
	constructor(student: IUser) {
		super(student);
	}

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
