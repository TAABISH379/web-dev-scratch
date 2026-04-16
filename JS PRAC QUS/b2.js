// B2 (Easy): Try reassigning a const variable; observe and explain the error.

const a = 6;

a = 1;

console.log(a)

//  Uncaught TypeError: Assignment to constant variable.

// Explanation: `const` creates a read-only binding; attempting to reassign throws a TypeError at runtime.