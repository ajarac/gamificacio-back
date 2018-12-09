import { Teacher } from './teacher';
import { Matter } from './matter';
import { Grade } from './grade';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class Group extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@OneToOne(() => Teacher)
	@JoinColumn()
	public teacherId: number;

	@OneToOne(() => Grade)
	@JoinColumn()
	public gradeId: number;

	@OneToOne(() => Matter)
	@JoinColumn()
	public matterId: number;
}
