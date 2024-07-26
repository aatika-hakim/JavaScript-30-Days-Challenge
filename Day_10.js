// *Event Handling //

// *Activity 1: Basic Event Handling
// * Task 1: Add a click event listener to a button that changes the text content of a paragraph.

document.getElementsByTagName("button").addEventListener("click", function(){
    document.getElementsByTagName("button").innerHTML = "Add a click event listener to a button that changes the text content";
});

// * Task 2: Add a double-click event listener to an image that toggles its visibility.

document.getElementsById("task2").addEventListener("dblclick", function(){
    document.getElementsById("img").style.visibility = "hidden";
});
