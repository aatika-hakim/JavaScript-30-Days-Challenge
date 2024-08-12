import multiply from './export.js';
import { addNumbers, createPerson, add, subtract } from './export.js';
import { PI, GRAVITY, calculateArea, shuffleArray } from './export.js';
import { greet } from './export.js';


// Task 1
console.log(addNumbers(5, 10)); // 15

// Task 2
const person = createPerson('ali', 25, 'Lahore')
console.log(person); // { name: 'ali', age: 25, city: 'Lahore' }

// Task 3
console.log(add(5, 5)); // 10
console.log(subtract(10, 5)); // 5

// Task 4
console.log(multiply(2, 3)); // 6

// Task 5
console.log("PI:", PI, "GRAVITY:", GRAVITY);
console.log("Area:",calculateArea(34));


// Importing Third Party Modules

// Task 6:

const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(array);

console.log('Original array:', array);
console.log('Shuffled array:', shuffledArray);

//  Task 7
console.log(greet('World'));