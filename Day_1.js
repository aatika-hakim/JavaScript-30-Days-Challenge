/* ========== Variables & Datatypes ========== */

// Activity 1: Variable Declaration

/* Task 1:  declare a variable using var, assign it a number and log the value to the console*/

var num = 5;
console.log(num);

/* Task 2: declare a variable using let, assign it a string and log the value to the console*/
let str = "Hello World";
console.log(str);

// Activity 2: Constant Declaration

/* Task 3: declare a variable using const, assign it a boolean value, and log the value to to the console*/
const bool = true;
console.log(bool);


/*
Activity 3: Data Types

Task 4: create variables of different types(number, boolean, string, object, array) and log each variable's type using typeof operator 
*/

// Number
let age = 20;
console.log(typeof age);

// Boolean
let isStudent = false;
console.log(typeof isStudent); 

// String
let greeting = "Hello";
console.log(typeof greeting);

// Object
let flower = {name: "Rose", color: "Red"};
console.log(typeof flower);

// Array
let array = [10, 20, 30, 40, 50];
console.log(typeof array);


/* Activity 4: Reassigning Varaiables

Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to console.
*/

let river = "Ravi";
console.log(river);

river = "Nile";
console.log(river);

/* Activity 5: Understanding const

Task 6: Try reassigning a variable declared with const and observe the error
*/
const River = "Ravi";
River = "Nile";

console.log(River); //TypeError: Assignment to constant variable.

/**** Question 1 ****/ 
/* Write a script that declares variables of different data types and logsthe both the value and type of each variable to the console */
// using varaiables from task 4

// Number
console.log(age, typeof age);

// Boolean
console.log(isStudent, typeof isStudent); 

// String
console.log(greeting, typeof greeting);

// Object
console.log(flower, typeof flower);

// Array
console.log(array, typeof array);


/**** Question 2 ****/ 
/* Create a script that demonstrate the difference in behaviour between let and const when it comes to reassignment */

// const
const city = "Lahore";
city = "Karachi"; // TypeError: Assignment to constant variable.
console.log(city); // Lahore

// let
let pet = "dog";
pet = "cat";
console.log(pet); // cat



