//* Error Handling

//* Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function task1() {
    try {
        // intentionally throws an error
        throw new Error("Something went wrong");
        } catch (error) {
            // log message to the console
            console.error("Error occurred:", error.message);
            }}
            task1();

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block lock to handle this error.

function divideNumbers(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        const result = numerator / denominator;
        return result;
    } catch (error) {
        console.error(error.message);
        return null; 
    }
}

console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(10, 0)); 


//* Activity 2: Finally Block

// Task 3: Write a script that includes a try catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try{
    console.log("try block")
}
catch(error){console.log("catch block")}
finally{
    console.log("finally")
}


//* Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.e.error(error.message);

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

function performAction() {
    throw new CustomError("Something went wrong in performAction!");
}

try {
    performAction();
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`CustomError caught: ${error.message}`);
    } else {
        console.error(`Unexpected error caught: ${error.message}`);
    }
}


// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Validation Function
function validateInput(input) {
    if (input.trim() === '') { // Checks if input is empty or whitespace
        throw new ValidationError('Input cannot be empty.');
    }
    return true; // valid input
}

// try-catch
try {
    const userInput = ''; 
    validateInput(userInput); // Validate input
    console.log('Input is valid.');
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation error: ${error.message}`);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}


//* Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.
// Create a promise that randomly resolves or rejects

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve('Promise resolved!');
            } else {
                reject('Promise rejected!');
            }
        }, 1000); // delay to simulate async operation
    });
}

// Use .catch() to handle the rejection
randomPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        const result = await randomPromise(); // Await the promise
        console.log(result);
    } catch (error) {
        console.error('Caught an error:', error);
    }
}

// Call the async function
handleRandomPromise();


//* Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.

// Function to fetch data from an invalid URL
function fetchData() {
    return fetch('https://invalid.url')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// Call the function to demonstrate error handling
fetchData();


// Task 9: Use the fetch API to request data from an invalid URL, within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchDataAsync() {
    try {
        const response = await fetch('https://invalid.url');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Call the async function
fetchDataAsync();


