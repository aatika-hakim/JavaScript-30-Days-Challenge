/********** Control Structures **********/

/*
    1. if-else 
    2. switch case
    3. conditional ternary operator
*/

/* Task 1: Write a program to check if a number is positive,negative, or zero,and the log the results to the console. */

let num = 5;
// num = 0;
// num = -5;

if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

/* Task 2: Write a program to check if a person is eligible to vot (age >= 18) and log the result to the console. */

let age = 18;

if (age >= 18) {
    console.log("The person is eligible to vote");
} else {
    console.log("The person is not eligible to vote");
}

/* Task 3: Write a program to find the largest of three numbers using nested if else statements. */
let num1 = 2;
let num2 = 3;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
    console.log("The largest number is " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("The largest number is " + num2);
} else {
    console.log("The largest number is " + num3);
}

/* Task 4: Write a program that uses a switch case to determine the days of week based on a number(1-7) and log the result to the console. */
let day = 5;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}


