import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
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

	@Column('tinyint') public emailVerified: string;

	@Column('varchar', { length: 512 })
	public verificationToken: string;

	@Column('varchar', { length: 512 })
	public status: string;

	@Column('datetime') public created: string;

	@Column('datetime') public lastUpdated: string;
}
