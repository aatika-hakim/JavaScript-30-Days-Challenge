//** Day 17: Data Structures **

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
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            return console.log("The stack is empty.");
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return console.log("The stack is empty.");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Function to reverse a string using a stack
function reverseString(inputString) {
    const stack = new Stack();
    for (let char of inputString) {
        stack.push(char);
    }

    let reversedString = '';
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

const originalString = "hello world";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);


// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return console.log("The queue is empty.");
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return console.log("The queue is empty.");
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front of Queue:", queue.front());
queue.dequeue();
console.log("Front of Queue after dequeue:", queue.front());

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        console.log(`Adding job: ${job}`);
        this.queue.enqueue(job);
    }

    processJob() {
        if (!this.queue.isEmpty()) {
            const job = this.queue.dequeue();
            console.log(`Processing job: ${job}`);
        } else {
            console.log("No jobs in the queue.");
        }
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob("Print Document 1");
printerQueue.addJob("Print Document 2");
printerQueue.processJob();
printerQueue.processJob();
printerQueue.processJob(); // No jobs in the queue


// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal: Left -> Node -> Right
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(70);
binaryTree.insert(20);

console.log("In-order Traversal:");
binaryTree.inOrderTraversal();


// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1); // For undirected graph
        }
    }

    bfs(startVertex) {
        const queue = [startVertex];
        const visited = {};
        visited[startVertex] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
    }
}

const graphs = new Graph();
graphs.addVertex("A");
graphs.addVertex("B");
graphs.addVertex("C");
graphs.addVertex("D");
graphs.addEdge("A", "B");
graphs.addEdge("A", "C");
graphs.addEdge("B", "D");

console.log("BFS starting from vertex A:");
graphs.bfs("A");

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = this.adjacencyList[vertex] || [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1]?.push(v2);
        this.adjacencyList[v2]?.push(v1);
    }

    findShortestPath(start, end) {
        const queue = [start], visited = { [start]: true }, pred = {};
        while (queue.length) {
            const v = queue.shift();
            if (v === end) return this.buildPath(start, end, pred);
            this.adjacencyList[v]?.forEach(n => {
                if (!visited[n]) visited[n] = (pred[n] = v, queue.push(n));
            });
        }
        return null;
    }

    buildPath(start, end, pred) {
        const path = [];
        for (let at = end; at; at = pred[at]) path.push(at);
        return path.reverse();
    }
}

// Example usage:
const graph = new Graph();
["A", "B", "C", "D", "E", "F"].forEach(v => graph.addVertex(v));
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

const shortestPath = graph.findShortestPath("A", "F");
console.log(shortestPath ? `Shortest path: ${shortestPath.join(' -> ')}` : "No path found");
