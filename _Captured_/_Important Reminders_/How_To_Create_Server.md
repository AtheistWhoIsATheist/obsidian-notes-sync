# How to Create A Server with Node.js
Wednesday 2025-11-12


// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`


---


## [An Example Node.js Application](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs#an-example-nodejs-application)

The most common example Hello World of Node.js is a web server:

CJSESM

```
const { createServer } = require('node:http');const hostname = '127.0.0.1';const port = 3000;const server = createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/plain');  res.end('Hello World');});server.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`);});
```

JavaScriptCopy to clipboard

To run this snippet, save it as a `server.js` file and run `node server.js` in your terminal. If you use mjs version of the code, you should save it as a `server.mjs` file and run `node server.mjs` in your terminal.

This code first includes the Node.js [`http` module](https://nodejs.org/api/http.html).

Node.js has a fantastic [standard library](https://nodejs.org/api/), including first-class support for networking.

The `createServer()` method of `http` creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the [`request` event](https://nodejs.org/api/http.html#http_event_request) is called, providing two objects: a request (an [`http.IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage) object) and a response (an [`http.ServerResponse`](https://nodejs.org/api/http.html#http_class_http_serverresponse) object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

The second is used to return data to the caller.

In this case with:

```
res.statusCode = 200;
```

JavaScriptCopy to clipboard

we set the `statusCode` property to `200`, to indicate a successful response.

We set the `Content-Type` header:

```
res.setHeader('Content-Type', 'text/plain');
```

JavaScriptCopy to clipboard

and we close the response, adding the content as an argument to `end()`:

```
res.end('Hello World\n');
```

JavaScriptCopy to clipboard

If you haven't already done so, [download](https://nodejs.org/en/download) Node.js.
