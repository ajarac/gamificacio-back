import { Teacher } from './teacher';
import { SchoolAdmin } from './school-admin';
import { Student } from './student';
import { Entity, Column, OneToMany } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface IAvatar {
	id?: number;
	name: string;
	image: string;
}

@Entity()
export class Avatar extends CustomEntity {
	constructor(avatar: IAvatar) {
		super(avatar);
	}

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
