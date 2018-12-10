import { Questionnaire } from './questionnaire';
import { CorrectAnswer } from './correct-answer';
import { Answer } from './answer';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Question extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public type: string;

	@Column('longtext') public image: string;

	@Column('int') public time: number;

	@OneToMany(() => Answer, (answer) => answer.question)
	public answers: Answer[];

	@OneToMany(() => CorrectAnswer, (correctAnswer) => correctAnswer.question)
	public correctAnswers: CorrectAnswer[];

	@ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
	public questionnaire: Questionnaire
}
