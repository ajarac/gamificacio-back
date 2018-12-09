import { Teacher } from './../../models/teacher';
import { IProvideData } from './index';
export class TeacherData implements IProvideData {
	init(): Promise<any> {
		const teacher0: Teacher = new Teacher();
		teacher0.id = 1000;
		teacher0.username = 'teacher-1';
		teacher0.password = 'teacher-1';
		teacher0.name = 'Joan';
		teacher0.surname = 'Felix';
		teacher0.email = 'teacher-1@classpip.com';
		teacher0.emailVerified = true;
		teacher0.schoolId = 1;
		teacher0.avatarId = 10;

		const teacher1: Teacher = new Teacher();
		teacher1.id = 1001;
		teacher1.username = 'teacher-2';
		teacher1.password = 'teacher-2';
		teacher1.name = 'Jose';
		teacher1.surname = 'Velazquez';
		teacher1.email = 'teacher-2@classpip.com';
		teacher1.emailVerified = true;
		teacher1.schoolId = 1;
		teacher1.avatarId = 1;

		const teacher2: Teacher = new Teacher();
		teacher2.id = 1002;
		teacher2.username = 'teacher-3';
		teacher2.password = 'teacher-3';
		teacher2.name = 'David';
		teacher2.surname = 'Piña';
		teacher2.email = 'teacher-3@classpip.com';
		teacher2.emailVerified = true;
		teacher2.schoolId = 2;
		teacher2.avatarId = 1;

		const teacher3: Teacher = new Teacher();
		teacher3.id = 1003;
		teacher3.username = 'teacher-4';
		teacher3.password = 'teacher-4';
		teacher3.name = 'Eva Maria';
		teacher3.surname = 'Piñol';
		teacher3.email = 'teacher-4@classpip.com';
		teacher3.emailVerified = true;
		teacher3.schoolId = 2;
		teacher3.avatarId = 2;

		const teacher4: Teacher = new Teacher();
		teacher4.id = 1004;
		teacher4.username = 'teacher-5';
		teacher4.password = 'teacher-5';
		teacher4.name = 'Lorena';
		teacher4.surname = 'Saez';
		teacher4.email = 'teacher-5@classpip.com';
		teacher4.emailVerified = true;
		teacher4.schoolId = 2;
		teacher4.avatarId = 2;

		return Promise.all([ teacher0.save(), teacher1.save(), teacher2.save(), teacher3.save(), teacher4.save() ]);
	}
}
