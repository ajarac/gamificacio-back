import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Role } from './role';

@Entity()
export class RoleMapping extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public principalType: string;

	@Column('varchar', { length: 255 })
	public principalId: string;

	@OneToOne(() => Role)
	@JoinColumn()
	public roleId: number;
}
