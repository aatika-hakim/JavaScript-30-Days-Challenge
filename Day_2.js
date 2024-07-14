/********************** Operators *********************/

// Arithmetic Operators
/* Task 1: Write a program to add two numbers and log the result to the console */

let num1 = 10;
let num2 = 20;

console.log(num1 + num2); // 30


/* Task 2: Write a program to subtract two numbers and log the result to the console */

console.log(num2 - num1); // 10

/* Task 3: Write a program to multiply two numbers and log the result to the console */

console.log(num1 * num2); // 200

/* Task 4: Write a program to divide two numbers and log the result to the console */

console.log(num2 / num1); // 2

/* Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console */

console.log(num2 % num1); // 0

// Assignment Operators

/* Task 6: Use the += operator to add a number to varaiable and log the result to the console */

let num = 2;
num += 10;
console.log(num); // 12

/* Task 7: Use the -= operator to add a number to varaiable and log the result to the console */

num -= 10;
console.log(num); // 2

// Comparison Operators
/* Task 8: Write a program to compare two numbers using > and <,  log the result to the console */

console.log(num1 > num2); // false
console.log(num1 < num2); // true

/* Task 9: Write a program to compare two numbers using >= and <=,  log the result to the console */

console.log(num1 >= num2); // false
console.log(num1 <= num2); // true

/* Task 10: Write a program to compare two numbers using == and ===,  log the result to the console */

let num3 = 20;
let num4 = "20";
console.log(num3 == num4); // true
console.log(num3 === num4); // false

// Logic operators
/* Task 11: Write a program that uses the && operator to combine two consditions and log the result to the console */

console.log("Task 11:",num1 > num2 && num1 < num3); // false

/* Task 12: Write a program that uses the || operator to combine two consditions and log the result to the console */

console.log("Task 12:", num1 > num2 || num1 < num3); // true

/* Task 13: Write a program that uses the ! operator to negate a consdition and log the result to the console */

console.log("Task 13:",!num1 > num2); // false 
console.log(!num1 < num2); // true

// Ternary Operators  
/* Task 11: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console */

console.log(num1 > 5 ? "Positive" : "Negative"); // Positive

/************* Question 1 *************/
/* Write a script that performs basic srithmetic operations(addition, subtraction, multiplication, division, remainder) on two numbers and log the results. */

let Number1 = 10;
let Number2 = 5;
console.log(Number1 + Number2); // 15
console.log(Number1 - Number2); // 5
console.log(Number1 * Number2); // 50
console.log(Number1 / Number2); // 2
console.log(Number1 % Number2); // 0

/************* Question 2 *************/
/* Create a script that compares two numbers using different comparision operators and combines conditions using logical operator, log the results. */

console.log(Number1 > Number2 && Number2 < Number1) //true
console.log(Number1 > Number2 || Number2 < Number1) //true
console.log(Number1 > Number2 && Number2 < Number1 || Number1 > Number2 && Number2 < Number1) //true


/************* Question 3 *************/
/* Write a script that uses ternary operator to determine if a number is positive or negative and log the results. */

console.log(Number1 < Number2 ? "Positive" : "Negative"); //  Negative






