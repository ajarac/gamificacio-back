import { CollectionCard } from './collection-card';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class CollectionCardTeacher {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => CollectionCard, (collectionCard) => collectionCard.id)
	@JoinColumn()
	public collectionCardId: number;

	@Column('int') public teacherId: number;
}
