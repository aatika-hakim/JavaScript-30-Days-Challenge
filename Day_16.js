// Day 16: Recursion: function calling itself

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

console.log(factorial(5)); //120
console.log(factorial(10)); //3628800


// Task 2: Write a recursive function to calculate the Fibonacci number. Log the result for a few test cases.
const fibonacci = n => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

console.log(fibonacci(10)); //55



// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases. 
const sumArray = arr => (arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1)));

console.log(sumArray([1, 2, 3, 4, 5])); // 15


// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
const maxArray = arr => (arr.length === 1 ? arr[0] : Math.max(arr[0], maxArray(arr.slice(1))));

console.log(maxArray([1, 2, 3, 4, 5])); // 5


// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
const reverseString = str => (str === "" ? "" : reverseString(str.slice(1)) + str[0]);

console.log(reverseString("hello")); // "olleh"


// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
const isPalindrome = str => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const check = s => (s.length <= 1 ? true : s[0] === s[s.length - 1] && check(s.slice(1, -1)));
    return check(cleaned);
};

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false



