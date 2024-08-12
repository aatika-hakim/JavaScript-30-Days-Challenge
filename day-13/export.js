// Modules
import _ from 'lodash';
import axios from 'axios';

// Creating Modules

// Task 1: 
export function addNumbers(a, b) {
    return a + b;
}

// Task 2: 
// create a module that exports an object representing a person with properties and models. Import and use the in another script.
export function createPerson(name, age, city) {
    return { name, age, city };
}

// Named and default exports
// Task 3:
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

// Task 4:
export default function multiply(a, b) {
    return a * b;
}

// Importing Entire Modules
// Task 5
export const PI = 3.14;
export const GRAVITY = 9.81;
export function calculateArea(radius) {
    return PI * radius ** 2;
}

// Importing Third Party Modules

// Task 6
export function shuffleArray(array) {
    return _.shuffle(array);
}

// Task 7
(async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
})();

// Task 8
export function greet(name) {
    return `Hello, ${name}!`;
}




