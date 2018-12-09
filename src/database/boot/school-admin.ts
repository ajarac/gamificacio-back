import { SchoolAdmin } from './../../models/school-admin';
import { IProvideData } from '.';

export class SchoolAdminData implements IProvideData {
	init(): Promise<any> {
		const schoolAdmin1: SchoolAdmin = new SchoolAdmin();

		schoolAdmin1.id = 100;
		schoolAdmin1.username = 'school-admin-1';
		schoolAdmin1.password = 'school-admin-1';
		schoolAdmin1.name = 'Jordi';
		schoolAdmin1.surname = 'Perez';
		schoolAdmin1.email = 'school-admin-1@classpip.com';
		schoolAdmin1.emailVerified = true;
		schoolAdmin1.schoolId = 2;
		schoolAdmin1.avatarId = 3;

		const schoolAdmin2: SchoolAdmin = new SchoolAdmin();
		schoolAdmin2.id = 101;
		schoolAdmin2.username = 'school-admin-2';
		schoolAdmin2.password = 'school-admin-2';
		schoolAdmin2.name = 'Paula';
		schoolAdmin2.surname = 'Giménez';
		schoolAdmin2.email = 'school-admin-2@classpip.com';
		schoolAdmin2.emailVerified = true;
		schoolAdmin2.schoolId = 1;
		schoolAdmin2.avatarId = 2;

		return Promise.all([ schoolAdmin1.save(), schoolAdmin2.save() ]);
	}
}
