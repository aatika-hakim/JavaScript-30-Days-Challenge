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


