const math = require('./math');
const util = require('util');

for (let i = 1; i < 80; i += 1) {
  // util.log('Fibonacci for ' + i + ' = ' + math.fibonacci(i));
  util.log(`Fibonacci for ${i} = ${math.fibonacciLoop(i)}`);
}
