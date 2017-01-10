const express = require('express');
const math = require('../math');
const util = require('util');
const http = require('http');

const router = express.Router();

router.get('/', (req, res, next) => {
  const parsedInput = parseInt(req.query.fibonum, 10);


  if (parsedInput && util.isNumber(parsedInput) && parsedInput >= 1) {
    // This type of event handler is computationally very intensive and
    // prevents the system from processing requests, it block NodeJS event loop.
    // Calculate Fibonacci number directly in this server, it will freeze event loop
    // res.render('fibonacci', {
    //   title: 'Calculate Fibonacci numbers',
    //   fibonum: parsedInput,
    //   fiboval: math.fibonacciLoop(parsedInput),
    // });

    // This type of event handler is also computationally intensive but
    // it doesn't prevents the system from processing requests,
    // instead it spreads computation through event loop.
    // Other users of the application are not blocked!
    // math.fibonacciAsync(parsedInput, (err, fiboval) => {
    //   res.render('fibonacci', {
    //     title: 'Calculate Fibonacci numbers',
    //     fibonum: parsedInput,
    //     fiboval,
    //   });
    // });

    const httpreq = http.request({
      hostname: 'localhost',
      port: process.env.SERVERPORT,
      path: `/fibonacci/${Math.floor(parsedInput)}`,
      method: 'GET',
    }, (httpres) => {
      httpres.on('data', (chunk) => {
        const data = JSON.parse(chunk);
        res.render('fibonacci', {
          title: 'Calculate Fibonacci numbers',
          fibonum: data.n,
          fiboval: data.value,
        });
      });

      httpres.on('error', err => next(err));
    });

    httpreq.on('error', err => next(err));

    httpreq.end();
  } else {
    res.render('fibonacci', {
      title: 'Calculate Fibonacci numbers',
      fiboval: undefined,
    });
  }
});

module.exports = router;
