// ****************  ES6+ Features **************** //

/*
Activities:

1. Template Literals
3. Destructuring
4. Spread Operator & rest Operators
5. Default Parameters
6. enhanced Object Literals

*/ 


// ****************  Template Literals **************** //

/* Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console. */ 

let Name = "Lily";
let age = 20;
console.log(`My Name is ${Name} and I am ${age} years old.`);

/* Task 2: Create a multi-line string using template literals and log it to the console.*/

let multiLineString = `
My Name is ${Name}.
I am ${age} years old.
`;
console.log(multiLineString);

// ****************  Destructuring **************** //

/* Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log the them to the console.*/

let numberArray = [22, 45, 33, 49, 35];
let elements = numberArray.slice(0, 2);

console.log(elements);

/* Task 4: Use object destructuring to extract the title and author from a book object and log them to the console. */

let book = {
    title: "JavaScript",
    author: "David",
    year: 2019
    };
// 1st method:
    console.log(book.title);
    console.log(book.author);

// 2nd method:
    // let {title, author} = book;
    // console.log(`"${title}" by "${author}"`);
    
