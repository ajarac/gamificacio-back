import { Student } from './student';
import { Teacher } from './teacher';
import { School } from './school';
import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface IPoint {
	id?: number;
	name: string;
	image: string;
	value: number;
}

@Entity()
export class Point extends CustomEntity {
	constructor(point: IPoint) {
		super(point);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('int') public value: number;

	@ManyToOne(() => School, (school) => school.points)
	public school: School;

	@ManyToOne(() => Teacher, (teacher) => teacher.points)
	public teacher: Teacher;

	@ManyToOne(() => Student, (student) => student.points)
	public student: Teacher;
}
