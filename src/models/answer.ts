import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Answer {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('int') public questionId: number;
}
