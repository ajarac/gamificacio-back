import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Avatar {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;
}
