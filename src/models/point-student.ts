import { Point } from './point';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, BaseEntity } from 'typeorm';
import { Student } from './student';

@Entity()
export class PointStudent extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Point)
	@JoinColumn()
	public pointId: number;

	@OneToOne(() => Student)
	@JoinColumn()
	public studentId: number;
}
