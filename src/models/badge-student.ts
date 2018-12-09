import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Badge, Student } from '.';

@Entity()
export class BadgeStudent extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Badge)
	@JoinColumn()
	public badgeId: number;

	@OneToOne(() => Student)
	@JoinColumn()
	public studentId: number;
}
