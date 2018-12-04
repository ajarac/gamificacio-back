import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Role } from './role';

@Entity()
export class RoleMapping {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public principalType: string;

	@Column('varchar', { length: 255 })
	public principalId: string;

	@OneToOne(() => Role, (role) => role.id)
	@JoinColumn()
	public roleId: number;
}
