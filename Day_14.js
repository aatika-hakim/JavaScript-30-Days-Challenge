//* Day 14: Classes

//* Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age is ${this.age}`);
    }
}

// instance of class
let person = new Person('Lily', 20);

console.log(person.greeting()); 

// Update the age
person.updateAge(21); 

console.log("Updated:", person.greeting()); 


//* Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    constructor(name, age, studentId) {
        // Call the parent class constructor
        super(name, age);
        this.studentId = studentId;
    }
    
    // Method to return the student ID
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

//  Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

       // Override the greeting method to include the student ID
        greeting() {
        // Call the parent class greeting method
        let parent_Greeting = super.greeting();
        // Append the student ID to the greeting message
        return `${parent_Greeting} My student ID is ${this.studentId}.`;
    }
}

// Create an instance of the Student class
let student = new Student('LILY', 21, 'S-12345');

console.log(student.getStudentId());

// Task 4
console.log(student.greeting());


//* Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an Instance of the class and log the message.



// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.


//* Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstheme and lastName property). Create an instance and log the full name using the getter. 

// Task 8: Add a setter method to the Person class to update the name properties (firstflame and lastlame). Update the name using the setter and log the updated full name.


//* Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
