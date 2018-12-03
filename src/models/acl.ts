import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Acl {
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
