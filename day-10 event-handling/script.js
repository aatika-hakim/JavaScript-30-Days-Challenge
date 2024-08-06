// Task 1

document.getElementById('change-txt-btn').addEventListener('click', function() {
    document.getElementById('txt_para').innerText = 'Text has been changed!';
});

// Task 2

document.getElementById('toggleImage').ondblclick = function () {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
};


// Activity 2: Mouse Events
// Task 3

const colorBox = document.getElementById('colorBox');
    colorBox.onmouseover = () => colorBox.style.backgroundColor = 'blue';
    // task 4
    colorBox.onmouseout = () => colorBox.style.backgroundColor = 'lightblue';


// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the form data to the console
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('myInput');
    input.addEventListener('keydown', () => {
        const formData = new FormData(document.getElementById('myForm'));
        console.log(Object.fromEntries(formData));
    });
});

// Task 6:
const keyupInput = document.getElementById('keyupInput');
const displayText = document.getElementById('displayText');

keyupInput.addEventListener('keyup', () => {
    displayText.textContent = `Current value: ${keyupInput.value}`;
});


// Activity 4: Form Events
// Task 7:
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(myForm);
    console.log('Form Data:');
    for (const [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
});

// Task 8:
const dropdown = document.getElementById('dropdown');
const selectedValue = document.getElementById('selectedValue');

dropdown.addEventListener('change', () => {
    selectedValue.textContent = `Selected value: ${dropdown.value}`;
});

// Activity 5: Event Delegation
// Task 9
const itemList = document.getElementById('itemList');

itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task 10
 const parentElement = document.getElementById('parentElement');
        parentElement.addEventListener('click', e => {
            if (e.target.classList.contains('dynamicItem')) console.log(`Clicked dynamic item: ${e.target.textContent}`);
        });
        document.getElementById('addButton').addEventListener('click', () => {
            const newItem = document.createElement('div');
            newItem.textContent = 'New Item';
            newItem.classList.add('dynamicItem');
            parentElement.appendChild(newItem);
        });