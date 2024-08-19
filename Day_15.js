//* Closures: A closure is a function that has access to its own scope, the scope of its outer functions and the global scope.

/* Activities
1. Understanding Closures
2. Creating Closures
3. Closure in loops
4. Module Pattern
5. Memorization
*/

// Task 1

// Basic Closure Script
function outerFunction() {
    let outerVariable = 'Hello from outer function!';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const inner = outerFunction();
inner(); 

// task 2

// Counter Closure Script
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // 1
counter.increment();
console.log(counter.getValue()); // 2

// TAsk 3
// Unique ID Generator Script
function createUniqueIdGenerator() {
    let lastId = 0;
    
    return function() {
        lastId++;
        return `id_${lastId}`;
    };
}

const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId()); // id_1
console.log(generateUniqueId()); // id_2


// TAsk 4
// Greeting Closure Script
function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greetJohn = createGreeting('ali');
greetJohn(); // Hello, ali!


//  Task 5
// Loop Closure Script
const functions = [];

for (let i = 0; i < 5; i++) {
    functions.push(function() {
        console.log(i);
    });
}

// Call each function to see the result
functions.forEach(fn => fn()); // 0, 1, 2, 3, 4



//  Task 6
// Module Pattern Script
function createItemManager() {
    const items = [];
    
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items.slice(); // Return a copy of the items array
        }
    };
}

const manager = createItemManager();
manager.addItem('Apple');
manager.addItem('Banana');
console.log(manager.listItems()); // ['Apple', 'Banana']
manager.removeItem('Apple');
console.log(manager.listItems()); // ['Banana']

// Task 7

// Memoization Script
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function slowFunction(x) {
    // Simulating a slow computation
    for (let i = 0; i < 1e6; i++) {}
    return x * 2;
}

// Create a memoized version
const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(10)); //20
console.log(memoizedSlowFunction(10)); // 20 (from cache)

