import { DatabaseProvider } from "./database";

DatabaseProvider.configure({
	type: (process.env.DATABASE_TYPE as any) || 'mysql',
	database: process.env.DATABASE_NAME || 'memory',
	username: process.env.DATABASE_USERNAME || 'mysql',
	password: process.env.DATABASE_PASSWORD || 'mysql',
	host: process.env.DATABASE_HOST || 'localhost',
	port: +process.env.DATABASE_PORT || 3306,
	ssl: !!process.env.USE_SSL
});
