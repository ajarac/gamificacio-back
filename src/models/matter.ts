import { Group } from './group';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany } from 'typeorm';
import { Grade } from './grade';

@Entity()
export class Matter extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToMany(() => Grade, (grade) => grade.matters)
	public grades: Grade[];

	@OneToMany(() => Group, (group) => group.matter)
	public groups: Group[];
}
