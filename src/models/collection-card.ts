import { Badge } from './badge';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class CollectionCard {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;

	@Column('varchar', { length: 512 })
	public num: string;

	@Column('varchar', { length: 512 })
	public createdBy: string;

	@OneToOne(() => Badge, (badge) => badge.id)
	@JoinColumn()
	public badgeId: number;
}
