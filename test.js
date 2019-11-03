const hent = require(`./dist/hent`);
const fs = require(`fs`).promises;

(async function () {
	const url = `https://raw.githubusercontent.com/terkelg/hent/master/logo.png`;
	const res = await hent(url);
	await fs.writeFile('logo.png', res.buffer);
})();
