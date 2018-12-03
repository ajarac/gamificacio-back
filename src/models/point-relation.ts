import { School } from './school';
import { Group } from './group';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Point } from './point';

@Entity()
export class PointRelation {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('int') public value: number;

	@OneToOne(() => Point, (point) => point.id)
	@JoinColumn()
	public pointId: number;

	@OneToOne(() => Group, (group) => group.id)
	@JoinColumn()
	public groupId: number;

	@OneToOne(() => School, (school) => school.id)
	@JoinColumn()
	public schoolId: number;

	@Column('int') public studentId: number;
}
