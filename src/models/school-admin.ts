import { Avatar } from './avatar';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity, ManyToOne } from 'typeorm';
import { School } from './school';

@Entity()
export class SchoolAdmin extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public surname: string;

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

	@Column('datetime') public lastUpdate: Date;

	@OneToOne(() => School, (school) => school.schoolAdmin)
	public school: School;

	@ManyToOne(() => Avatar, (avatar) => avatar.schoolAdmins)
	public avatar: Avatar;
}
