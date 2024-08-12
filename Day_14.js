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





//* Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an Instance of the class and log the message.

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.


//* Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstheme and lastName property). Create an instance and log the full name using the getter. 

// Task 8: Add a setter method to the Person class to update the name properties (firstflame and lastlame). Update the name using the setter and log the updated full name.


//* Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
