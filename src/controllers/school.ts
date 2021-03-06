import { Controller } from './controller';
import { HttpServer } from './../server/httpServer';
import { Request, Response } from 'restify';
import { schoolService } from '../services/school';

export class SchoolController implements Controller {
	public initialize(httpServer: HttpServer): void {
		httpServer.get('/schools', this.getAll.bind(this));
		httpServer.get('/schools/:id', this.getById.bind(this));
	}

	private async getAll(req: Request, res: Response): Promise<void> {
		const schools = await schoolService.getAll();
		res.send(200, schools);
	}

	private async getById(req: Request, res: Response): Promise<void> {
		const school = await schoolService.getById(req.params.id);
		res.send(school ? 200 : 404, school);
	}
}
