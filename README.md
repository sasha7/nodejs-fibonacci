# nodejs-fibonacci
NodeJS application for calculating Fibonacci numbers.

Made as an excercise to think about computationally intensive code in Node.js.
Fibonacci function is a long-running blocking operation.

Solutions:
* Algorithmic refactoring or make the calculation async by spliting the function into callbacks dispatched through the event loop
* Create a backend service (use a separate node process for heavyweight calculation (fiboserver.js))


