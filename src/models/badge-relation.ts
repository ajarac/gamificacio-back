import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BadgeRelation {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('int') public value: number;

	@Column('int') public badgeId: number;

	@Column('int') public groupId: number;

	@Column('int') public schoolId: number;

	@Column('int') public studentId: number;
}
