import { Student } from './student';
import { Teacher } from './teacher';
import { School } from './school';
import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface IBadge {
	id?: number;
	name: string;
	image: string;
	value: number;
}

@Entity()
export class Badge extends CustomEntity {
	
	constructor(badge: IBadge) {
		super(badge);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('int') public value: number;

	@ManyToOne(() => School, (school) => school.badges)
	public school: School;

	@ManyToOne(() => Teacher, (teacher) => teacher.badges)
	public teacher: Teacher;

	@ManyToMany(() => Student, (student) => student.badges)
	public students: Student[];
}
