import { Controller } from './controller';
import { HttpServer } from './../server/httpServer';
import { Request, Response } from 'restify';
import { avatarService } from './../services/avatar';

export class AvatarController implements Controller {
	public initialize(httpServer: HttpServer): void {
		httpServer.get('/avatars/:id', this.getById.bind(this));
	}

	private async getById(req: Request, res: Response): Promise<void> {
		const avatar = await avatarService.getById(req.params.id);
		res.send(avatar ? 200 : 404, avatar);
	}
}
