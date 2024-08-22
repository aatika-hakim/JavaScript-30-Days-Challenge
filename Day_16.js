// Day 16: Recursion: function calling itself

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
console.log(factorial(10));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(10));

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases. 
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}
console.log(sumArray([1, 2, 3, 4, 5]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        let max = maxArray(arr.slice(1));
        return arr[0] > max ? arr[0] : max;
    }
}
console.log(maxArray([1, 2, 3, 4, 5]));

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited. Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.