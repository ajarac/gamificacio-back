import { Teacher } from './teacher';
import { SchoolAdmin } from './school-admin';
import { Student } from './student';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export class Avatar extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@OneToMany(() => Student, (student) => student.avatar)
	public students: Student[];

	@OneToMany(() => Teacher, (teachers) => teachers.avatar)
	public teachers: Teacher[];
	
	@OneToMany(() => SchoolAdmin, (schoolAdmin) => schoolAdmin.avatar)
	public schoolAdmins: SchoolAdmin[];
}
