# hent [![build status](https://badgen.now.sh/github/status/terkelg/hent)](https://github.com/terkelg/hent/actions) [![codecov](https://badgen.now.sh/codecov/c/github/terkelg/hent)](https://codecov.io/gh/terkelg/hent)

> A micro utility to download files in node

hent is a small, promise based, utility to download files into buffers.
Protocol and redirecrts are automatically handled for you.


## Features

- Promise based
- Supports HTTP and HTTPS protocols
- Follow redirects
- Dependency free

Additionally, this module is delivered as:

* **ES Module**: [`dist/hent.mjs`](https://unpkg.com/hent/dist/hent.mjs)
* **CommonJS**: [`dist/hent.js`](https://unpkg.com/hent/dist/hent.js)


## Install

```
$ npm install --save hent
```


## Usage

```js
import hent from 'hent';

const {buffer} = await hent('https://example.com/dog.jpeg');

// access response object
const {res, buffer} = await hent('https://example.com/cat.png');

// that's it!
```


## API

### hent(url)
Returns: `Promise <Object>`

The returned object has two properties: `buffer` and `res`.
- `buffer` is the downloaded file as a [Buffer](https://nodejs.org/api/buffer.html).
- `res` is the node [response](https://nodejs.org/api/http.html#http_class_http_incomingmessage) used to access response status, headers and data.


> **fyi**: hent is a danish word and means fetch.

### url
Type: `String`

URL to the resource you want to download.<br>
Protocol is automatically detected.


## License

MIT © [Terkel Gjervig](https://terkel.com)
