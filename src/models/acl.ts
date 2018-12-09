import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Acl extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public model: string;

	@Column('varchar', { length: 512 })
	public property: string;

	@Column('varchar', { length: 512 })
	public accessType: string;

	@Column('varchar', { length: 512 })
	public permission: string;

	@Column('varchar', { length: 512 })
	public principalType: string;

	@Column('varchar', { length: 512 })
	public principalId: string;
}
