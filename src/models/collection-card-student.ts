import { CollectionCard } from './collection-card';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Student } from './student';

@Entity()
export class CollectionCardStudent extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => CollectionCard)
	@JoinColumn()
	public collectionCardId: number;

	@OneToOne(() => Student)
	@JoinColumn()
	public studentId: number;
}
