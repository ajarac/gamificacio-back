import { Group } from './group';
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, BaseEntity } from 'typeorm';
import { CollectionCard } from './collection-card';

@Entity()
export class CollectionCardGroup extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => CollectionCard)
	@JoinColumn()
	public collectionCardId: number;

	@OneToOne(() => Group)
	@JoinColumn()
	public groupId: number;
}
