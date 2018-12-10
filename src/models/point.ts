import { Student } from './student';
import { Teacher } from './teacher';
import { School } from './school';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class Point extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

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
