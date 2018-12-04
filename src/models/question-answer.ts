import { Answer } from './answer';
import { Question } from './question';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class QuestionAnswer {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Question, (question) => question.id)
	@JoinColumn()
	public questionId: number;

	@OneToOne(() => Answer, (answer) => answer.id)
	@JoinColumn()
	public answerId: number;
}
