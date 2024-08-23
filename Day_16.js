// Day 16: Recursion: function calling itself

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

console.log(factorial(5)); //120
console.log(factorial(10)); //3628800


// Task 2: Write a recursive function to calculate the Fibonacci number. Log the result for a few test cases.
const fibonacci = n => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

console.log(fibonacci(10)); //55



