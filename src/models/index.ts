import { Student } from './student';
import { SchoolAdmin } from './school-admin';
import { RoleMapping } from './role-mapping';
import { ResultQuestionnaire } from './resultQuestionnaire';
import { QuestionnaireQuestion } from './questionnaire-question';
import { Questionnaire } from './questionnaire';
import { QuestionCorrectAnswer } from './question-correct-answer';
import { QuestionAnswer } from './question-answer';
import { PointStudent } from './point-student';
import { PointRelation } from './point-relation';
import { MatterGrade } from './matter-grade';
import { GroupStudent } from './group-student';
import { Group } from './group';
import { Grade } from './grade';
import { CorrectAnswer } from './correct-answer';
import { CollectionCardTeacher } from './collection-card-teacher';
import { CollectionCardStudent } from './collection-card-student';
import { CollectionCardGroup } from './collection-card-group';
import { CollectionCard } from './collection-card';
import { CardStudent } from './card-student';
import { Badge } from './badge';
import { BadgeStudent } from './badge-student';
import { BadgeRelation } from './badge-relation';
import { Avatar } from './avatar';
import { Answer } from './answer';
import { Acl } from './acl';
import { AccessToken } from './access-token';
import { Card } from './card';
import { Matter } from './matter';
import { Point } from './point';
import { Question } from './question';
import { Role } from './role';
import { School } from './school';
import { Teacher } from './teacher';
import { User } from './user';

export const MODELS = [
	School,
	AccessToken,
	Acl,
	Answer,
	Avatar,
	BadgeRelation,
	BadgeStudent,
	Badge,
	CardStudent,
	Card,
	CollectionCard,
	CollectionCardGroup,
	CollectionCardStudent,
	CollectionCardTeacher,
	CorrectAnswer,
	Grade,
	GroupStudent,
	Group,
	MatterGrade,
	Matter,
	PointRelation,
	PointStudent,
	Point,
	QuestionAnswer,
	QuestionCorrectAnswer,
	Question,
	Questionnaire,
	QuestionnaireQuestion,
	ResultQuestionnaire,
	RoleMapping,
	Role,
	SchoolAdmin,
	School,
	Student,
	Teacher,
	User
];

export * from './student';
export * from './school-admin';
export * from './role-mapping';
export * from './resultQuestionnaire';
export * from './questionnaire-question';
export * from './questionnaire';
export * from './question-correct-answer';
export * from './question-answer';
export * from './point-student';
export * from './point-relation';
export * from './matter-grade';
export * from './group-student';
export * from './group';
export * from './grade';
export * from './correct-answer';
export * from './collection-card-teacher';
export * from './collection-card-student';
export * from './collection-card-group';
export * from './collection-card';
export * from './card-student';
export * from './badge';
export * from './badge-student';
export * from './badge-relation';
export * from './avatar';
export * from './answer';
export * from './acl';
export * from './access-token';
export * from './card';
export * from './matter';
export * from './point';
export * from './question';
export * from './role';
export * from './school';
export * from './teacher';
export * from './user';
