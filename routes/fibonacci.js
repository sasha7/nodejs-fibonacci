const express = require('express');
const math = require('../math');
const util = require('util');

const router = express.Router();

router.get('/', (req, res, next) => {

  let parsedInput = parseInt(req.query.fibonum, 10);

  if (parsedInput && util.isNumber(parsedInput) && parsedInput >= 1) {
    // Calculate Fibonacci number directly in this server
    res.render('fibonacci', {
      title: 'Calculate Fibonacci numbers',
      fibonum: parsedInput,
      fiboval: math.fibonacci(parsedInput)
    });
  } else {
    res.render('fibonacci', {
      title: 'Calculate Fibonacci numbers',
      fiboval: undefined
    });
  }

});

module.exports = router;