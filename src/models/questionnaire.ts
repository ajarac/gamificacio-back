import { Question } from './question';
import { Student } from './student';
import { Teacher } from './teacher';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, OneToOne } from 'typeorm';
import { ResultQuestionnaire } from './resultQuestionnaire';

@Entity()
export class Questionnaire extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;

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
