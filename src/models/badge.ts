import { Student } from './student';
import { Teacher } from './teacher';
import { School } from './school';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Badge extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

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
