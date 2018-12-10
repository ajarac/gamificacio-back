import { Questionnaire } from './questionnaire';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity } from 'typeorm';

@Entity()
export class ResultQuestionnaire extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public questionnaireName: string;

	@Column('int') public numTotalQuestions: number;

	@Column('int') public numAnswerCorrect: number;

	@Column('int') public numAnswerNoCorrect: number;

	@Column('int') public finalNote: number;

	@Column('varchar', { length: 512 })
	public dataAnswers: string;

	@OneToOne(() => Questionnaire, (q) => q.result) 
	public questionnaire: Questionnaire;

	// @OneToOne(() => Student , (student) => student.resultQuestionnaires)

}
