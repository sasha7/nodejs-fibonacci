# nodejs-fibonacci
NodeJS application for calculating Fibonacci numbers.

Made as an excercise to think about computationally intensive code in Node.js.
Fibonacci function is a long-running blocking operation. It can block node’s single-threaded event-loop.

Solutions to mitigate:
* Algorithmic refactoring to speed up calculation (i.e. use a for loop instead of recursion)
* Keep event loop free of heavy calculation with async function calls (make the calculation async by spliting the function into callbacks dispatched through the event loop)
* Create a separate REST service (use a separate node process for heavyweight calculation (fiboserver.js)) which can be easily scaled.


