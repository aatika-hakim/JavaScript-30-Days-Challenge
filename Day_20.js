//* LocalStorage & SessionStorage


//* Activity 1: Understanding localStorage


// Task 1: Save and Retrieve a String Value

localStorage.setItem('str', 'Hello');
const str = localStorage.getItem('str');
console.log(str);


// Task 2: Save and Retrieve an Object

const obj = { name: 'Ali', age: 22 };
localStorage.setItem('obj', JSON.stringify(obj));
const parsedObj = JSON.parse(localStorage.getItem('obj'));
console.log(parsedObj);


//* Activity 2: Using localStorage


// Task 3: Simple Form with localStorage

const form = document.querySelector('form');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');

form.addEventListener('submit', () => {
  localStorage.setItem('name', nameField.value);
  localStorage.setItem('email', emailField.value);
});

window.addEventListener('load', () => {
  nameField.value = localStorage.getItem('name') || '';
  emailField.value = localStorage.getItem('email') || '';
});


// Task 4: Remove Item from localStorage

console.log(localStorage.getItem('str'));
localStorage.removeItem('str');
console.log(localStorage.getItem('str'));