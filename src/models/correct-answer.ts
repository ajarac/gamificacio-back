import { Question } from './question';
import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface ICorrectAnswer {
	id?: number;
	name: string;
}

@Entity()
export class CorrectAnswer extends CustomEntity {
	constructor(correctAnswer: ICorrectAnswer) {
		super(correctAnswer);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToOne(() => Question, (question) => question.correctAnswers)
	public question: Question;
}
