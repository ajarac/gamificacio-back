import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column } from 'typeorm';
import { CollectionCard } from './collection-card';

@Entity()
export class CollectionCardGroup {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => CollectionCard, (collectionCard) => collectionCard.id)
	@JoinColumn()
	public collectionCardId: number;

	@Column('int') public groupId: number;
}
