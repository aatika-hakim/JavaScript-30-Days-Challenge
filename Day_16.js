//* Recursion: the function calls itself

//* Activities

// Task 1
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1)
}

console.log(factorial(20));

// Task 2
// recursive function to calculate fibonacci number. log the result for a few test cases.
// what is fibonacci number?
// Fibonacci number is a number in the sequence where each number is the sum of the two preceding ones
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// test cases
console.log(fibonacci(10)); 
console.log(fibonacci(20));

// Recursion with arrays
// Task 3

function sumOfElements([array]){
    if(array === ""){
        return 0;
    }
    else {
        return sumOfElements([array])
    }
}

console.log(sumOfElements([12,34,45])); 