import { School } from './school';
import { Group } from './group';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Point } from './point';
import { Student } from './student';

@Entity()
export class PointRelation extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('int') public value: number;

	@OneToOne(() => Point)
	@JoinColumn()
	public pointId: number;

	@OneToOne(() => Group)
	@JoinColumn()
	public groupId: number;

	@OneToOne(() => School)
	@JoinColumn()
	public schoolId: number;

	@OneToOne(() => Student)
	@JoinColumn()
	public studentId: number;
}
