import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Avatar extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('longtext') public image: string;
}
