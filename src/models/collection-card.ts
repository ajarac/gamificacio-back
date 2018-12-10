import { Card } from './card';
import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { Teacher } from './teacher';
import { Student } from './student';
import { Group } from './group';
import { CustomEntity } from './custom-entity';

export interface ICollectionCard {
	id?: number;
	name: string;
	image: string;
	num: string;
	createdBy: string;
}

@Entity()
export class CollectionCard extends CustomEntity {
	constructor(cCard: ICollectionCard) {
		super(cCard);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('varchar', { length: 512 })
	public num: string;

	@Column('varchar', { length: 512 })
	public createdBy: string;

	@OneToMany(() => Card, (card) => card.collectionCard)
	public cards: Card[];

	@ManyToMany(() => Teacher, (teacher) => teacher.collectionCards)
	public teachers: Teacher[];

	@ManyToMany(() => Student, (student) => student.collectionCards)
	public students: Student[];

	@ManyToMany(() => Group, (group) => group.collectionCards)
	public groups: Group[];
}
