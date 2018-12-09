import { IProvideData } from '.';
import { User, Role } from '../../models';

export class SysAdminData implements IProvideData {
	init(): Promise<any> {
    const user = new User();
    user.id = 1,
		user.username = 'admin';
		user.password = 'admin';
		user.email = 'classpip@gmail.com';
    user.emailVerified = true;
    
    const promise = user.save().then((value: User) => {
      const role: Role = new Role();
      role.name = 'SYS-ADMIN';

      return role.save()
    });
    return promise
	}
}
