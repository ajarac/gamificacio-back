import { Matter } from './matter';
import { Entity, Column, ManyToMany, OneToMany } from 'typeorm';
import { Group } from './group';
import { CustomEntity } from './custom-entity';

export interface IGrade {
	id?: number;
	name: string;
}

@Entity()
export class Grade extends CustomEntity {
	constructor(grade: IGrade) {
		super(grade);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@ManyToMany(() => Matter, (matter) => matter.grades)
	public matters: Matter[];

	@OneToMany(() => Group, (group) => group.grade)
	public groups: Group[];
}
