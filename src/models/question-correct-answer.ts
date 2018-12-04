import { CorrectAnswer } from './correct-answer';
import { Question } from './question';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class QuestionCorrectAnswer {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Question, (question) => question.id)
	@JoinColumn()
	public questionId: number;

	@OneToOne(() => CorrectAnswer, (correctAnswer) => correctAnswer.id)
	@JoinColumn()
	public correctAnswerId: number;
}
