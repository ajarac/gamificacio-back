import { Student } from './student';
import { Group } from './group';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class GroupStudent extends BaseEntity{
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Group)
	@JoinColumn()
	public groupId: number;

	@OneToOne(() => Student)
	@JoinColumn()
	public studentId: number;
}
