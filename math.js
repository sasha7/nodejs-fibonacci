// simplistic Fibonacci implementation with recursion
const fibonacci = (n) => {
  if (n === 1) return 1;
  else if (n === 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
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

module.exports.fibonacci = fibonacci;
module.exports.fibonacciLoop = fibonacciLoop;
