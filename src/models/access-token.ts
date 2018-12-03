import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class AccessToken {
	@PrimaryColumn('varchar', { length: 255 })
	public id: string;

	@Column('int') public ttl: number;

	@Column('datetime') public created: any;

	@Column('int') public userId: number;
}
