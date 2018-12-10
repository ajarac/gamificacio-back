import { Questionnaire } from './questionnaire';
import { CorrectAnswer } from './correct-answer';
import { Answer } from './answer';
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface IQuestion {
	id?: number;
	name: string;
	type: string;
	image: string;
	time: number;
}

@Entity()
export class Question extends CustomEntity {
	constructor(question) {
		super(question);
	}

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
	public questionnaire: Questionnaire;
}
