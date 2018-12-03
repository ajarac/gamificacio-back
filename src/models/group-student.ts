import { Group } from './group';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';

@Entity()
export class GroupStudent {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Group, (group) => group.id)
	@JoinColumn()
	public groupId: number;

	@Column('int') public studentId: number;
}
