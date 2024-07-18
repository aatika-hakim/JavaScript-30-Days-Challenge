//************** Arrays ***************//

/* 
    * 1. Array Creation & Access
    * 2. Array Methods(Basic)
    * 3. Array Methods(Intermediate)
    * 4. Array Iteration
    * 5. Multi-dimensional Arrays
*/ 

//************** 1. Array Creation & Access ***************//

/* Task 1: Create an array of numbers from 1 to 5 and log the result to the console. */

let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray); // [1, 2, 3, 4, 5]

/* Task 2:  Access the first and last elements of the array and log them to the console.*/
// array index start from 0

console.log(numberArray[0]); // 1  first element
console.log(numberArray[4]); // 5  last element


//************** 2. Array Methods(Basic) ***************//

/* Task 3: Use the push method to add a new number to the end of the array and log the updated array to the console.*/

numberArray.push(6); // number to add
console.log(numberArray); // [ 1, 2, 3, 4, 5, 6 ]

/* Task 4: Use the pop method to remove the last element from the array and log the updated array to the console.*/


numberArray.pop(6); // number to remove
console.log(numberArray); // [ 1, 2, 3, 4, 5]

/* Task 5:  Use the shift method to remove the first element from the array and log the updated array to the console.*/ 

numberArray.shift([0]); // index of the number to be removed
console.log(numberArray); // [ 2, 3, 4, 5]

/* Task 6:  Use the unshift method to add the new number at the beginning of the array and log the updated array to the console.*/ 

// original array :[ 2, 3, 4, 5]
numberArray.unshift(0); 
console.log(numberArray); // updated array: [ 0, 2, 3, 4, 5 ]



