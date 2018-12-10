import { Student } from './student';
import { SchoolAdmin } from './school-admin';
import { Point } from './point';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import { Badge } from './badge';
import { Teacher } from './teacher';

@Entity()
export class School extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public address: string;

	@Column('longtext') public image: string;

	@Column('longtext') public imageBig: string;

	@Column('varchar', { length: 512 })
	public zipCode: string;

	@Column('varchar', { length: 512 })
	public city: string;

	@Column('varchar', { length: 512 })
	public country: string;

	@Column('text') public latitude: string;

	@Column('text') public longitude: string;

	@Column('varchar', { length: 512 })
	public cif: string;

	@Column('varchar', { length: 512 })
	public phone: string;

	@Column('varchar', { length: 512 })
	public website: string;

	@Column('varchar', { length: 512 })
	public facebook: string;

	@Column('varchar', { length: 512 })
	public twitter: string;

	@Column('varchar', { length: 512 })
	public description: string;

	@OneToMany(() => Badge, (badge) => badge.school)
	public badges: Badge[];

	@OneToMany(() => Point, (point) => point.school)
	public points: Point[];

	@OneToOne(() => SchoolAdmin, (schoolAdmin) => schoolAdmin.school)
	public schoolAdmin: SchoolAdmin;

	@OneToMany(() => Student, (student) => student.school)
	public students: Student[];

	@OneToMany(() => Teacher, (teacher) => teacher.school)
	public teachers: Teacher[];
}
