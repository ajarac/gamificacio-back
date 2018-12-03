import { Point } from './point';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';

@Entity()
export class PointStudent {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Point, (point) => point.id)
	@JoinColumn()
	public pointId: number;

	@Column('int') public studentId: number;
}
