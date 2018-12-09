import { CollectionCard } from './collection-card';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class Card extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('varchar', { length: 512 })
	public ratio: string;

	@Column('varchar', { length: 512 })
	public rank: string;

	@OneToOne(() => CollectionCard)
	@JoinColumn()
	public collectionCardId: number;
}
