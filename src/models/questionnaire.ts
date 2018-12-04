import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Questionnaire {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public date: string;

	@Column('text') public points: string;

	@Column('text') public badges: string;

	@Column('varchar', { length: 512 })
	public groupid: string;

	@Column('text') public packCards: string;

	@Column('tinyint') public active: boolean;

	@Column('int') public teacherId: number;

	@Column('int') public studentId: number;
}
