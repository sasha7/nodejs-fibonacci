// Module which makes a HTTP request and show you the detail of the response.
const http = require('http');
const url = require('url');
const util = require('util');

const argUrl = process.argv[2];
const parsedUrl = url.parse(argUrl, true);

// util.log(`URL DETAILS: ${util.inspect(parsedUrl)}`);

const options = {
  host: parsedUrl.hostname,
  port: parsedUrl.port,
  path: parsedUrl.pathname,
  method: 'GET',
};

if (parsedUrl.search) {
  options.path += `?${parsedUrl.search}`;
}

// initiate a http request
const req = http.request(options);

req.on('response', (res) => {
  util.log(`STATUS: ${res.statusCode}`);
  util.log(`HEADERS: ${util.inspect(res.headers)}`);
  res.setEncoding('utf8');

  // The response object is itself an EventEmitter,
  // which emits the data and error events
  res.on('data', (chunk) => {
    util.log(`BODY: ${chunk}`);
  });
  res.on('error', (err) => {
    util.log(`RESPONSE ERROR: ${err}`);
  });
});

req.on('error', (err) => {
  util.log(`REQUEST ERROR: ${err}`);
});

req.end();
