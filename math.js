// simplistic Fibonacci implementation with recursion
const fibonacci = (n) => {
  if (n === 1) return 1;
  else if (n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// more efficient Fibonacci implementation with a loop
const fibonacciLoop = (n) => {
  const fibos = [];
  fibos[0] = 1;
  fibos[1] = 1;
  fibos[2] = 1;
  for (let i = 3; i <= n; i += 1) {
    fibos[i] = fibos[i - 1] + fibos[i - 2];
  }

  return fibos[n];
};

const fibonacciAsync = (n, done) => {
  if (n === 0) {
    done(undefined, 0);
  } else if (n === 1 || n === 2) {
    done(undefined, 1);
  } else {
    setImmediate(() => {
      fibonacciAsync(n - 1, (err, val1) => {
        if (err) done(err);
        else {
          setImmediate(() => {
            fibonacciAsync(n - 2, (err, val2) => {
              if (err) done(err);
              else done(undefined, val1 + val2);
            });
          });
        }
      });
    });
  }
};

module.exports.fibonacci = fibonacci;
module.exports.fibonacciLoop = fibonacciLoop;
module.exports.fibonacciAsync = fibonacciAsync;
