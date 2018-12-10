import { Questionnaire } from './questionnaire';
import { Entity, Column, OneToOne } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface IResultQuestionnaire {
	id?: number;
	questionnaireName: string;
	numTotalQuestions: number;
	numAnswerCorrect: number;
	numAnswerNoCorrect: number;
	finalNode: number;
	dataAnswers: number;
}

@Entity()
export class ResultQuestionnaire extends CustomEntity {
	constructor(resultQ) {
		super(resultQ);
	}

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
}
