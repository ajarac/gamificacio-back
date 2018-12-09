import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { User } from './user';

@Entity()
export class AccessToken extends BaseEntity {
	@PrimaryColumn('varchar', { length: 255 })
	public id: string;

	@Column('int') public ttl: number;

	@Column('datetime') public created: any;

	@OneToOne(() => User)
	@JoinColumn()
	public userId: number;
}
