import { Question } from './question';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class Answer extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToOne(() => Question, (question) => question.answers)
	public question: Question;
}
