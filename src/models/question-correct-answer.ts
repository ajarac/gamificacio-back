import { CorrectAnswer } from './correct-answer';
import { Question } from './question';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class QuestionCorrectAnswer extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Question)
	@JoinColumn()
	public questionId: number;

	@OneToOne(() => CorrectAnswer)
	@JoinColumn()
	public correctAnswerId: number;
}
