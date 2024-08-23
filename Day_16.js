// Day 16: Recursion: function calling itself

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

console.log(factorial(5)); //120
console.log(factorial(10)); //3628800




