import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { School } from './school';

@Entity()
export class Point {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('int') public value: number;

	@OneToOne(() => School, (school) => school.id)
	@JoinColumn()
	public schoolId: number;

	@Column('int') public teacherId: number;
}
