import { Matter } from './matter';
import { Student } from './student';
import { Teacher } from './teacher';
import { CollectionCard } from './collection-card';
import { Entity, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Grade } from './grade';
import { CustomEntity } from './custom-entity';

export interface IGroup {
	id?: number;
	name: string;
}

@Entity()
export class Group extends CustomEntity {
	constructor(group: IGroup) {
		super(group);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToMany(() => CollectionCard, (cCard) => cCard.groups)
	public collectionCards: CollectionCard[];

	@ManyToOne(() => Grade, (grade) => grade.groups)
	public grade: Grade;

	@ManyToOne(() => Teacher, (teacher) => teacher.groups)
	public teacher: Teacher;

	@ManyToMany(() => Student, (student) => student.groups)
	public students: Student[];

	@ManyToOne(() => Matter, (matter) => matter.groups)
	public matter: Matter;
}
