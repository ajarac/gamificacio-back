import { Matter } from './matter';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany } from 'typeorm';
import { Group } from './group';

@Entity()
export class Grade extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToMany(() => Matter, (matter) => matter.grades)
	public matters: Matter[];

	@OneToMany(() => Group, (group) => group.grade)
	public groups: Group[]
}
