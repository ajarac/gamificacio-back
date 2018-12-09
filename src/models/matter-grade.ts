import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Grade } from './grade';
import { Matter } from './matter';

@Entity()
export class MatterGrade extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Matter)
	@JoinColumn()
	public matterId: number;

	@OneToOne(() => Grade)
	@JoinColumn()
	public gradeId: number;
}
