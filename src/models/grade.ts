import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Grade {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;
}
