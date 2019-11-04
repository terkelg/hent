import { createServer } from 'http';
import { join } from 'path';
import fs from 'fs';

const path = join(__dirname, 'pile-of-poo.png');

function handler(req, res) {
	if (req.path) {
		res.writeHead(301, { Location: '/' });
		return res.end();
	}
	res.setHeader('Content-Type', 'image/jpeg');
	res.setHeader('x-test', req.headers['x-test'] || '');
	res.end(fs.readFileSync(path));
}

export default async function () {
	return new Promise(res => {
		let app = createServer(handler).listen();
		let close = app.close.bind(app);
		let { port } = app.address();
		return res({ port, close });
	});
}
