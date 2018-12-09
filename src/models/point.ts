import { Teacher } from './teacher';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { School } from './school';

@Entity()
export class Point extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('int') public value: number;

	@OneToOne(() => School)
	@JoinColumn()
	public schoolId: number;

	@OneToOne(() => Teacher)
	@JoinColumn()
	public teacherId: number;
}
