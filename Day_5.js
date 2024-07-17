/*---------------- Functions ------------------*/

/*
1. Function Declaration
2. Function Expression
3. Arrow Function
4. Function Parameters & Default values
5. Higher-Order Functions
*/

/* Task 1: Write a function to check if a number is even or odd and log theresult to the console.*/
function isEvenOrOdd(number){
    if(number % 2 === 0){
        console.log("The number is even");
        }else{
            console.log("The number is odd");
    }
}

isEvenOrOdd(9); // The number is odd
isEvenOrOdd(2); // The number is even

/* Task 2: Write s function to calculate the square of a number and return the result.*/

function calc_Square(num){
    console.log("The square of", num, "=", num * num);
}

calc_Square(12);

/* Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. */

function findMaximum(a, b) {
    console.log( a > b ? a : b); // ternary operator
}

findMaximum(2,6);
findMaximum(10,8);

/* Task 4: Write a function expression to concatenate two strings and log the results to the console.*/

function concatStrings(str1, str2){
    console.log(str1 + str2);
    }

concatStrings("str", "ing");




