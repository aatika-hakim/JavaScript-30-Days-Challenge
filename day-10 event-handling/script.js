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
