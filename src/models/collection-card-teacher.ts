import { Teacher } from './teacher';
import { CollectionCard } from './collection-card';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class CollectionCardTeacher extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => CollectionCard)
	@JoinColumn()
	public collectionCardId: number;

	@OneToOne(() => Teacher)
	@JoinColumn()
	public teacherId: number;
}
