import { DatabaseProvider } from './../database/index';
import { School } from '../models/school';

export class SchoolService {
	public async getById(id: number): Promise<School> {
		const connection = await DatabaseProvider.getConnection();
		return await connection.getRepository(School).findOne(id);
	}
}

export const schoolService = new SchoolService();
