import { Avatar } from './avatar';
import { Entity, OneToOne, ManyToOne } from 'typeorm';
import { School } from './school';
import { User, IUser } from './user';

@Entity()
export class SchoolAdmin extends User {
	constructor(schoolAdmin: IUser) {
		super(schoolAdmin);
	}

	@OneToOne(() => School, (school) => school.schoolAdmin)
	public school: School;

	@ManyToOne(() => Avatar, (avatar) => avatar.schoolAdmins)
	public avatar: Avatar;
}
