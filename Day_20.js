//* LocalStorage & SessionStorage


// Activity 1: Understanding localStorage


// Task 1: Save and Retrieve a String Value

localStorage.setItem('str', 'Hello');
const str = localStorage.getItem('str');
console.log(str);


// Task 2: Save and Retrieve an Object

const obj = { name: 'Ali', age: 22 };
localStorage.setItem('obj', JSON.stringify(obj));
const parsedObj = JSON.parse(localStorage.getItem('obj'));
console.log(parsedObj);