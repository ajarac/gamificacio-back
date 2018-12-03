import { DatabaseProvider } from './../database/index';
import { Avatar } from '../models/avatar';

export class AvatarService {
	public async getById(id: number): Promise<Avatar> {
		const connection = await DatabaseProvider.getConnection();
		return await connection.getRepository(Avatar).findOne(id);
	}
}

export const avatarService = new AvatarService();
