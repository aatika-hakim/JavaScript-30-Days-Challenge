// Day 17: Data Structures

// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToEnd(value) {
        let newNode = new Node(value), current = this.head;
        if (!current) this.head = newNode;
        else {
            while (current.next) current = current.next;
            current.next = newNode;
        }
    }

    removeFromEnd() {
        if (!this.head) return console.log("The list is empty.");
        if (!this.head.next) return this.head = null;
        let current = this.head;
        while (current.next.next) current = current.next;
        current.next = null;
    }

    display() {
        let nodes = [], current = this.head;
        while (current) nodes.push(current.value), current = current.next;
        console.log(nodes.length ? nodes.join(" - ") : "empty list");
    }
}

const list = new LinkedList();
list.addToEnd(10);
list.addToEnd(20);
list.addToEnd(30);

list.display();

list.removeFromEnd();
list.display();

console.log(list)


// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) return console.log("The stack is empty.");
        return this.items.pop();
    }
    peek() {
        if (this.items.length === 0) return console.log("The stack is empty.");
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
console.log("Original:",stack)
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
// console.log(stack.pop());
console.log("New Stack",stack)


// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
