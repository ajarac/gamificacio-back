import { Student } from './student';
import { Teacher } from './teacher';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class Questionnaire extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public date: string;

	@Column('text') public points: string;

	@Column('text') public badges: string;

	@Column('varchar', { length: 512 })
	public groupid: string;

	@Column('text') public packCards: string;

	@Column('tinyint') public active: boolean;

	@OneToOne(() => Teacher)
	@JoinColumn()
	public teacherId: number;

	@OneToOne(() => Student)
	@JoinColumn()
	public studentId: number;
}
