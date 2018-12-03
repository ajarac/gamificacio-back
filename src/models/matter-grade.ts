import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Grade } from './grade';
import { Matter } from './matter';

@Entity()
export class MatterGrade {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Matter, (matter) => matter.id)
	@JoinColumn()
	public matterId: number;

	@OneToOne(() => Grade, (grade) => grade.id)
	@JoinColumn()
	public gradeId: number;
}
