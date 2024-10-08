// Day 16: Recursion
/*
- A recursive function calls itself.
- The function has a base case that stops the recursion.
- The function breaks down the problem into smaller instances of the same problem.
- The function solves the problem by combining the solutions to the smaller instances.

*/


// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

console.log(factorial(5)); //120
console.log(factorial(10)); //3628800

// Task 2: Write a recursive function to calculate the Fibonacci number. Log the result for a few test cases.
const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

console.log(fibonacci(10)); //55

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
const sumArray = (arr) =>
  arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1));

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
const maxArray = (arr) =>
  arr.length === 1 ? arr[0] : Math.max(arr[0], maxArray(arr.slice(1)));

console.log(maxArray([1, 2, 3, 4, 5])); // 5

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
const reverseString = (str) =>
  str === "" ? "" : reverseString(str.slice(1)) + str[0];

console.log(reverseString("hello")); // "olleh"

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
const isPalindrome = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const check = (s) =>
    s.length <= 1 ? true : s[0] === s[s.length - 1] && check(s.slice(1, -1));
  return check(cleaned);
};

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
const binarySearch = (arr, target, low = 0, high = arr.length - 1) => {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  return arr[mid] === target
    ? mid
    : arr[mid] < target
    ? binarySearch(arr, target, mid + 1, high)
    : binarySearch(arr, target, low, mid - 1);
};

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
const countOccurrences = (arr, target) =>
  arr.length === 0
    ? 0
    : (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);

console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // 3

// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const inOrderTraversal = (node) => {
  if (node) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
};

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);
inOrderTraversal(root); // 1 2 3 4 5 6 7

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
const treeDepth = (node) =>
  node ? Math.max(treeDepth(node.left), treeDepth(node.right)) + 1 : 0;

console.log(treeDepth(root)); // 3
