import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Questionnaire } from './questionnaire';
import { Question } from './question';

@Entity()
export class QuestionnaireQuestion {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Questionnaire, (q) => q.id)
	@JoinColumn()
	public questionnaireId: number;

	@OneToOne(() => Question, (question) => question.id)
	@JoinColumn()
	public questionId: number;
}
