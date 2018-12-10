import { Question } from './question';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class CorrectAnswer extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToOne(() => Question, (question) => question.correctAnswers)
	public question: Question;
}
