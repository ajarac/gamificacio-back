import { Answer } from './answer';
import { Question } from './question';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class QuestionAnswer extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Question)
	@JoinColumn()
	public questionId: number;

	@OneToOne(() => Answer)
	@JoinColumn()
	public answerId: number;
}
