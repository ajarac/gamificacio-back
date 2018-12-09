import { Badge } from './badge';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class CollectionCard extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('varchar', { length: 512 })
	public num: string;

	@Column('varchar', { length: 512 })
	public createdBy: string;

	@OneToOne(() => Badge)
	@JoinColumn()
	public badgeId: number;
}
