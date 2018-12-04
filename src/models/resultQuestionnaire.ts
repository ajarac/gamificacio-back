import { Questionnaire } from './questionnaire';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class ResultQuestionnaire {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('text') public questionnaire: string;

	@Column('text') public student: string;

	@Column('varchar', { length: 512 })
	public questionnaireName: string;

	@Column('int') public numTotalQuestions: number;

	@Column('int') public numAnswerCorrect: number;

	@Column('int') public numAnswerNoCorrect: number;

	@Column('int') public finalNote: number;

	@Column('varchar', { length: 512 })
	public dataAnswers: string;

	@OneToOne(() => Questionnaire, (q) => q.id)
	@JoinColumn()
	public questionnaireId: number;

	@Column('int') public studentId: number;
}
