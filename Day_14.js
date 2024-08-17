//* Day 14: Classes

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static greet() {
        return "Hello, world!";
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(firstName, lastName, age, major) {
        super(firstName, lastName, age);
        this.major = major;
        Student.studentCount++;
    }

    greeting() {
        return `Hello, my name is ${this.fullName} and I am a ${this.major} major.`;
    }
}

let student = new Student("hello", "world", 20, "Computer Science");
console.log(student.greeting());
console.log(Student.studentCount);
console.log(Person.greet());
student.fullName = "hello world";
console.log(student.greeting());


//* Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an Instance of the class and log the message.

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     static greet() {
//         return "Hello, world!";
//     }

//     static genericGreeting() {
//         return "Hello, everyone!";
//     }
// }

// console.log(Person.genericGreeting()); //Hello, everyone!

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.


//* Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstheme and lastName property). Create an instance and log the full name using the getter. 
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static greet() {
        return "Hello, world!";
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(firstName, lastName, age, major) {
        super(firstName, lastName, age);
        this.major = major;
        Student.studentCount++; // Increment the studentCount
    }

    greeting() {
        return `Hello, my name is ${this.fullName} and I am a ${this.major} major.`;
    }
}

let student1 = new Student("John", "Doe", 20, "Computer Science");
let student2 = new Student("Jane", "Doe", 21, "Mathematics");
let student3 = new Student("Bob", "Smith", 22, "Physics");

console.log(Student.studentCount);

// Task 8, 9 , 10
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static greet() {
        return "Hello, world!";
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(firstName, lastName, age, major) {
        super(firstName, lastName, age);
        this.major = major;
        Student.studentCount++;
    }

    greeting() {
        return `Hello, my name is ${this.fullName} and I am a ${this.major} major.`;
    }
}

let student = new Student("java", "script", 20, "Computer Science");
console.log(student.fullName);

student.fullName = "Java Script";
console.log(student.fullName); 


class Account {
balance = 0;

    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Invalid withdrawal amount");
        }
    }

    getBalance() {
        return this.balance;
    }
}

let account = new Account(1000);
console.log(account.getBalance()); // 1000

account.deposit(500);
console.log(account.getBalance()); // 1500

account.withdraw(200);
console.log(account.getBalance()); // 1300
