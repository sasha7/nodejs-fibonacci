const http = require('http');
const util = require('util');


for (let i = 30; i >= 0; i -= 1) {
  const path = `/fibonacci/${i}`;
  util.log(`Requesting ${path}`);

  const req = http.request({
    host: 'localhost',
    path,
    port: 3002,
    method: 'GET',
  }, (res) => {
    res.on('data', (chunk) => {
      util.log(`BODY: ${chunk}`);
    });
  });

  req.end();
}
