import { Avatar } from './avatar';
import { School } from './school';
import { Questionnaire } from './questionnaire';
import { Point } from './point';
import { CollectionCard } from './collection-card';
import { Badge } from './badge';
import { Entity, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Group } from './group';
import { User, IUser } from './user';

@Entity()
export class Teacher extends User {
	constructor(teacher: IUser) {
		super(teacher);
	}

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
