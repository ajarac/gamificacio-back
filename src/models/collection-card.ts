import { Card } from './card';
import { Badge } from './badge';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import { Teacher } from './teacher';
import { Student } from './student';
import { Group } from './group';

@Entity()
export class CollectionCard extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

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
	public students: Student[]

	@ManyToMany(() => Group, (group) => group.collectionCards)
	public groups: Group[]
}
