import { Questionnaire } from './questionnaire';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Student } from './student';

@Entity()
export class ResultQuestionnaire extends BaseEntity {
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

	@OneToOne(() => Questionnaire)
	@JoinColumn()
	public questionnaireId: number;

	@OneToOne(() => Student)
	@JoinColumn()
	public studentId: number;
}
