document.addEventListener('DOMContentLoaded', () => {
    // Activity 1: Understanding LocalStorage
    // Task 1: Save and retrieve a string value
    localStorage.setItem('str', 'Hello');
    console.log(localStorage.getItem('str'));

    // Task 2: Save and retrieve an object
    const obj = { name: 'Ali', age: 22 };
    localStorage.setItem('obj', JSON.stringify(obj));
    const retrievedObj = JSON.parse(localStorage.getItem('obj'));
    console.log(retrievedObj);

    // Activity 2: Using LocalStorage
    // Task 3: Save user input to LocalStorage
    const form = document.querySelector('#userForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const userData = { name, email };
        localStorage.setItem('user', JSON.stringify(userData));
        displayData();
    })