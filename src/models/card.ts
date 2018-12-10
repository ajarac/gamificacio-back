import { Student } from './student';
import { CollectionCard } from './collection-card';
import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm';
import { CustomEntity } from './custom-entity';

export interface ICard {
	id?: number;
	name: string;
	image: string;
	ratio: string;
	rank: string;
}

@Entity()
export class Card extends CustomEntity {
	constructor(card: ICard) {
		super(card);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('varchar', { length: 512 })
	public ratio: string;

	@Column('varchar', { length: 512 })
	public rank: string;

	@ManyToOne(() => CollectionCard, (cCard) => cCard.cards)
	public collectionCard: CollectionCard;

	@ManyToMany(() => Student, (student) => student.cards)
	public students: Student[];
}
