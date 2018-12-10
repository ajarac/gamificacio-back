import { Question } from './question';
import { Student } from './student';
import { Teacher } from './teacher';
import { Entity, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm';
import { ResultQuestionnaire } from './resultQuestionnaire';
import { CustomEntity } from './custom-entity';

export interface IQuestionnaire {
	id?: number;
	name: string;
	date: string;
	points: string;
	badges: string;
}

@Entity()
export class Questionnaire extends CustomEntity {
	constructor(questionnaire) {
		super(questionnaire);
	}

	@Column('varchar', { length: 512 })
	public name: string;

	@Column('varchar', { length: 512 })
	public date: string;

	@Column('text') public points: string;

	@Column('text') public badges: string;

	@Column('varchar', { length: 512 })
	public groupid: string;

	@Column('text') public packCards: string;

	@Column('tinyint') public active: boolean;

	@OneToMany(() => Question, (question) => question.questionnaire)
	public questions: Question[];

	@ManyToOne(() => Teacher, (teacher) => teacher.questionnaires)
	public teacher: Teacher;

	@ManyToOne(() => Student, (student) => student.questionnaires)
	public student: Student;

	@OneToOne(() => ResultQuestionnaire, (r) => r.questionnaire)
	public result: ResultQuestionnaire;
}
