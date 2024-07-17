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
    return num * num;
}

console.log("The square of the number =", calc_Square(12));


/* Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. */

function findMaximum(a, b) {
    return  a > b ? a : b; // ternary operator
}

console.log(findMaximum(2,6));

/* Task 4: Write a function expression to concatenate two strings and return the results*/

function concatStrings(str1, str2){
    return str1 + str2
    }

    console.log(concatStrings("str", "ing"));


/* Task 5: Write an arrow function to calculate the sum of the two numbers and  return the result */

const Sum = (a, b) =>  { return a + b};

console.log("Sum =" , Sum(2,6)); 



/* Task 6:  Write an arrow function to check if a string contains a specific character and return the result*/

const check_Char = (str, char) => { return str.includes(char) ? "Yes" : "No"}; // ternary operator

console.log(check_Char("Hello World","l"));









