import { Question } from './question';
import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface IAnswer {
	id?: number;
	name: string;
}


@Entity()
export class Answer extends CustomEntity {
	constructor(answer: IAnswer) {
		super(answer);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToOne(() => Question, (question) => question.answers)
	public question: Question;
}
