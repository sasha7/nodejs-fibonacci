const express = require('express');
const logger = require('morgan');
const math = require('./math');
const util = require('util');

const app = express();

app.use(logger('dev'));

app.get('/fibonacci/:n', (req, res, next) => {
  if (req.params.n) {
    const n = Math.floor(req.params.n);
    if (!util.isNumber(n)) {
      next('FIBONACCI SERVER ERROR: PARAM IS NOT A NUMBER');
    } else {
      // Because the server is using fibonacciAsync, it will work on
      // calculating all responses simultaneously.
      math.fibonacciAsync(Math.floor(req.params.n), (err, val) => {
        if (err) {
          next(`FIBONACCI SERVER ERROR: ${err}`);
        } else {
          res.send({
            n: req.params.n,
            value: val,
          });
        }
      });
    }
  } else {
    next('FIBONACCI SERVER ERROR: PARAM IS MISSING');
  }
});


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    error: err,
  });
});


app.listen(process.env.SERVERPORT);
