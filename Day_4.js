/*------------------ Loops ------------------ */

/* 
    1. for loop
    2. while loop
    3. do while loop
    4. nested loop
    5. loop control statements
*/


/* Task 1: Write a program to pront numbers from 1 to 10 using for loop. */

for(let count = 0; count <=10; count++){
    console.log(count);
}

/* Task 2: Write a program to print multiplication table of 5 using for loop. */

let i =5;

    for (let j = 0; j <= 10; j++){
        console.log(i,"*", j, "=", i*j)
    }

/* Task 3: Write a program to calculate the sum of numbers from 1 to 10 using while loop. */

let num = 0;
let sum = 0;

while(num <= 10){
    sum += num;
    num++;
}

console.log("The sum of numbers from 1 to 10 =",sum)


/* Task 4: Write a program to print numbers from 10 to 1 using while loop. */

let numbers = 10;

while(numbers >= 1){
    console.log(numbers);
    numbers--;
    }

    
/* Task 5: Write a program to print numbers from 1 to 5 using do....while loop. */

let number = 1;

do{
    console.log(number++);
}
while(number <= 5);


/* Task 6: Write a program to calculate the factorial of a number using a do...while loop */

let x = 15;
let fact = 1; 

do {
    fact = fact * x;
    x--; 
} while (x > 0);

console.log("The factorial of 15 is", fact);





