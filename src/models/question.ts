import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Question {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public type: string;

	@Column('longtext') public image: string;

	@Column('int') public time: number;

	@Column('int') public questionnaireId: number;
}
