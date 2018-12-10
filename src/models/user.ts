import { Column } from 'typeorm';
import { CustomEntity } from './custom-entity';

export class IUser {
	id?: number;
	realm: string;
	username: string;
	password: string;
	credentials: string;
	challenges: string;
	email: string;
	emailVerified: boolean;
	verificationToken: string;
	status: string;
	created: Date;
	lastUpdated: Date;
}

export abstract class User extends CustomEntity {
	constructor(user: IUser) {
		super(user);
	}

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

	@Column('datetime') public created: Date;

	@Column('datetime') public lastUpdated: Date;
}
