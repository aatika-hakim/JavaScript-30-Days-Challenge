// ****************  Objects **************** //

/*
Activities: 

1. Create an object & Access
2. Object Methods
3. Nested Objects
4. this keyword
5. Object Iteration

*/

/* Task 1: Create an object representing a book with properties like title, author and year, and log the object to the console. */

const book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
};

console.log(book);

/* Task 2: Access and log the title and author properties of the book object. */

console.log(book.title);
console.log(book.author);

/* Task 3: Add a method to the book that returns a string with the book's title and author, and log the result of calling this method. */

book.getBookInfo = function () {
    return `${book.title} was written by ${book.author} in ${book.year}`;
};

console.log(book.getBookInfo());

/* Task 4: Add a method to the book object that takes parameter(year) and updates the book's year property, then log he updated object. */

book.updateYear = function (year) {
    this.year = year;
    return year;
};

console.log(book.updateYear(2020));
console.log(book.getBookInfo());

/* Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library to the console. */

const library = {

    name: "Oxford Library",
    books: [
        { 
            title: "Eloquent JavaScript", 
            author: "Marijn Haverbeke", 
            year: 2018 
        },
        {
            title: "JavaScript: The Definitive Guide",
            author: "David Flanagan",
            year: 2011,
        },
        { 
            title: "JavaScript for Kids", 
            author: "Nick Morgan", 
            year: 2013 
        },
    ],
};

console.log(library);

/* Task 6: Access and log the name of library and the titles of all the books in the library. */

// library name
console.log(library.name);

// books titles
library.books.forEach(book => {
    console.log(book.title);
});

/* Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year. */

book.getInfo = function() {
    return`${this.title} was written in ${this.year}`;
};

console.log(book.getInfo());

/* Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.*/

const Book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
};

for (let key in Book){
    console.log(key, ":", Book[key]);
}

/* Task 9: Use object.keys and object.values methods to log all the keys and values of book object.*/

console.log(Object.keys(Book));
console.log(Object.values(Book));