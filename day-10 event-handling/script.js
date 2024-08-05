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

// Task 7:

// Task 8:
