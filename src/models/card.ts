import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Card {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('varchar', { length: 512 })
	public ratio: string;

	@Column('varchar', { length: 512 })
	public rank: string;

	@Column('int') public collectionCardId: number;
}
