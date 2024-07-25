// ****************  DOM MANIPULATION **************** //

/* 
Activities:
1. Selecting & Manipulating Elements
2. Creating & Appending Elements
3. Removing Elements
4. Modifying Attributes and classes
5. Event Handling
*/

// ********  Selecting & Manipulating Elements  ********** //

/* Task 1: Select an HTML element by its ID and change its text content.*/

document.getElementById("task1").innerHTML = "'JAVASCRIPT' 30 DAYS CHALLANGE BY 'CHAICODE'";

/* Task 2: Select an HTML element by its class and change its background color. */

document.getElementsByClassName("task2")[0].style.backgroundColor = "red";


// ********  Creating & Appending Elements  ********** //

/* Task 3:  Create a new div element with some text content and append it to the body.*/

var newDiv = document.createElement("div");
newDiv.innerHTML = "This is a new div element.";
document.body.appendChild(newDiv);

/* Task 4: Create a new li element and addit to an existing ul list. */

var newLi = document.createElement("li");
newLi.innerHTML = "New List";

var ul = document.getElementById("task4");
ul.appendChild(newLi);

// ********  Removing Elements  ********** //

/* Task 5: Select an element and remove it from DOM.*/

document.getElementById("task5").remove();

/* Task 6: Remove the last child of a specific HTML element. */

ul.removeChild(ul.lastChild); // remove last child of ul

