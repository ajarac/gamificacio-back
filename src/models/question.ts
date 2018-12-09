import { Questionnaire } from './questionnaire';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class Question extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public type: string;

	@Column('longtext') public image: string;

	@Column('int') public time: number;

	@OneToOne(() => Questionnaire)
	@JoinColumn()
	public questionnaireId: number;
}
