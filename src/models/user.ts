import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn() public id: number;

	@Column('varchar', { length: 512 })
	public realm: string;

	@Column('varchar', { length: 512 })
	public username: string;

	@Column('varchar', { length: 512 })
	public password: string;

	@Column('text') public credentials: string;

	@Column('text') public challenges: string;

	@Column('varchar', { length: 512 })
	public email: string;

	@Column('tinyint') public emailVerified: boolean;

	@Column('varchar', { length: 512 })
	public verificationToken: string;

	@Column('varchar', { length: 512 })
	public status: string;

	@Column('datetime') public created: string;

	@Column('datetime') public lastUpdated: string;
}
