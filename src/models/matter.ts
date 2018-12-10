import { Group } from './group';
import { Entity, Column, ManyToMany, OneToMany } from 'typeorm';
import { Grade } from './grade';
import { CustomEntity } from './custom-entity';

export interface IMatter {
	id?: number;
	name: string;
}

@Entity()
export class Matter extends CustomEntity {
	constructor(matter: IMatter) {
		super(matter);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToMany(() => Grade, (grade) => grade.matters)
	public grades: Grade[];

	@OneToMany(() => Group, (group) => group.matter)
	public groups: Group[];
}
