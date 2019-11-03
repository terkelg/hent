import test from 'tape';
import server from './server';
import hent from '../src';

test('exports', t => {
	t.is(typeof hent, 'function');
	t.end();
});

test('usage', async t => {
	const ctx = await server();
	const x = await hent(`http://localhost:${ctx.port}`);
	t.is(typeof x, 'object');
	t.is(typeof x.res, 'object');
	t.is(x.res.statusCode, 200);
	t.ok(x.buffer instanceof Buffer);
	ctx.close();
	t.end();
});

test('usage :: redirect', async t => {
	const ctx = await server();
	const x = await hent(`http://localhost:${ctx.port}/redirect`);
	t.is(typeof x, 'object');
	t.is(typeof x.res, 'object');
	t.is(x.res.statusCode, 200);
	t.ok(x.buffer instanceof Buffer);
	ctx.close();
	t.end();
});

