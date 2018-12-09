import { Teacher } from './teacher';
import { School } from './school';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class Badge extends BaseEntity {
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
