import { Matter } from './matter';
import { Grade } from './grade';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Group {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('int') public teacherId: number;

	@OneToOne(() => Grade, (grade) => grade.id)
	@JoinColumn()
	public gradeId: number;

	@OneToOne(() => Matter, (matter) => matter.id)
	@JoinColumn()
	public matterId: number;
}
