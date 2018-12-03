import { HttpServer } from './../server/httpServer';
import { Controller } from './controller';
import { Request, Response } from 'restify';

export class PingController implements Controller {
	initialize(httpServer: HttpServer): void {
		httpServer.get('/ping', this.sendPing.bind(this));
	}

	private sendPing(req: Request, res: Response): void {
		res.send(200, 'Hello');
	}
}
