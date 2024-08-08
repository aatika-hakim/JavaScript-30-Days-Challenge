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
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.


//* Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console. Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.


//* Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console. • Task 9: Use the fetch API to request data from an invalid URL, within an async function and handle the error using try-catch. Log an appropriate error message.

