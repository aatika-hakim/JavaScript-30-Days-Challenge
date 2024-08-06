//************ Day 11: Promises and Async/Await ***************//


//* Activity 1: Understanding Promises */

/* Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console. */
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000); // 2 seconds
});

promise.then(message => console.log(message)); // Output: Promise resolved

/* Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using catch(). */
// Create a promise that rejects with an error message after a 2-second timeout
const errorPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 2000); // 2 seconds
});

// Handle the error using catch()
errorPromise.catch((errorMessage) => {
    console.error(errorMessage);
});


//* Activity 2: Chaining Promises */

/* Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order. */

// Function to simulate data fetching
function fetchData(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, 3000); // 3 second delay
    });
}

// Chain of promises
fetchData('Step 1: Initial Data')
    .then((data) => {
        console.log(data);
        return fetchData('Step 2: More Data');
    })
    .then((data) => {
        console.log(data);
        return fetchData('Step 3: Even More Data');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });



//* Activity 3: Using Async/Await */

/* Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value, */
async function logResolvedValue(promise) {
    try {
        const value = await promise;
        console.log('Resolved value:', value);
    } catch (error) {
        console.error('Error:', error); // Catching any errors that occur during await
    }
}

const resolvedPromise = Promise.resolve('Success!');
logResolvedValue(resolvedPromise);
// Output: Resolved value: Success!


/* Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message. */
async function handleRejectedPromise(promise) {
    try {
        const value = await promise;
        console.log('Resolved value:', value);
    } catch (error) {
        console.error('Caught an error:', error.message); // Logging the error message
    }
}

const rejectedPromise = Promise.reject(new Error('Something went wrong!'));
handleRejectedPromise(rejectedPromise);
// Output: Caught an error: Something went wrong!


//* Activity 4: Fetching Data from an API */

/* Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. */

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Fetch data from the API

fetch(apiUrl) // returns a Promise
    .then(response => {
        // Check if the response is 200=success
        if (!response.ok) {
            throw new Error('Failure');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Something went wrong. Try again', error);
    });


/* Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.*/

async function fetchAPIData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/2';

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network Error');
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        // Log any errors that occurred during the fetch
        console.error('Failure in operation', error);
    }
}

// Call the async function
fetchAPIData();



//* Activity 5: Concurrent Promises */

/* Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values. */

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Value 1'), 5000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Value 2'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Value 3'), 3000));

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log('All promises resolved:', values);
    })
    .catch((error) => {
        console.error('promise rejected:', error);
    });


/* Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises. */

// Use Promise.race to log the value of the first promise that resolves
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log('First promise resolved with:', value);
    })
    .catch((error) => {
        console.error('Error in promise race:', error);
    });