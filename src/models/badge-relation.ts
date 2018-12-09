import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, BaseEntity } from 'typeorm';
import { Student } from './student';
import { School } from './school';
import { Group } from './group';
import { Badge } from './badge';

@Entity()
export class BadgeRelation extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('int') public value: number;

	@OneToOne(() => Badge)
	@JoinColumn()
	public badgeId: number;

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
