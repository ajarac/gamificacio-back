import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Questionnaire } from './questionnaire';
import { Question } from './question';

@Entity()
export class QuestionnaireQuestion extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Questionnaire)
	@JoinColumn()
	public questionnaireId: number;

	@OneToOne(() => Question)
	@JoinColumn()
	public questionId: number;
}
