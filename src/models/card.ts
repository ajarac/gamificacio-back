import { Student } from './student';
import { CollectionCard } from './collection-card';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany } from 'typeorm';

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

	@ManyToOne(() => CollectionCard, (cCard) => cCard.cards)
	public collectionCard: CollectionCard;

	@ManyToMany(() => Student, (student) => student.cards)
	public students: Student[];
}
