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
    });

    function displayData() {
        const savedData = JSON.parse(localStorage.getItem('user'));
        if (savedData) {
            document.querySelector('#output').textContent = `Name: ${savedData.name}, Email: ${savedData.email}`;
        }
    }

    displayData();

    // Task 4: Remove an item from LocalStorage
    console.log(localStorage.getItem('str'));
    localStorage.removeItem('str');
    console.log(localStorage.getItem('str'));

    // Activity 3: Understanding SessionStorage
    // Task 5: Save and retrieve a string value in SessionStorage
    sessionStorage.setItem('str', 'Hello Session');
    console.log(sessionStorage.getItem('str'));

    // Task 6: Save and retrieve an object in SessionStorage
    sessionStorage.setItem('obj', JSON.stringify(obj));
    const sessionRetrievedObj = JSON.parse(sessionStorage.getItem('obj'));
    console.log(sessionRetrievedObj);

    // Activity 4: Using SessionStorage
    // Task 7: Save user input to SessionStorage
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const sessionUserData = { name, email };
        sessionStorage.setItem('user', JSON.stringify(sessionUserData));
        displaySessionData();
    });

    function displaySessionData() {
        const sessionSavedData = JSON.parse(sessionStorage.getItem('user'));
        if (sessionSavedData) {
            document.querySelector('#output').textContent = `Name: ${sessionSavedData.name}, Email: ${sessionSavedData.email}`;
        }
    }

    displaySessionData();

    // Task 8: Remove an item from SessionStorage
    console.log(sessionStorage.getItem('str'));
    sessionStorage.removeItem('str');
    console.log(sessionStorage.getItem('str'));

    // Activity 5: Comparing LocalStorage and SessionStorage
    // Task 9: Save to both storages and compare
    function saveToBoth(key, value) {
        localStorage.setItem(key, value);
        sessionStorage.setItem(key, value);
        console.log(`localStorage: ${localStorage.getItem(key)}, sessionStorage: ${sessionStorage.getItem(key)}`);
    }

    // Task 10: Clear both storages
    function clearBoth() {
        localStorage.clear();
        sessionStorage.clear();
        console.log(`localStorage: ${localStorage.length}, sessionStorage: ${sessionStorage.length}`);
    }

    saveToBoth('testKey', 'testValue');
    clearBoth();
});
