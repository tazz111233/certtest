// Student class
class Student {
    constructor(name, age, email, course) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.course = course;
    }
}

// Node class for linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new student
    addStudent(student) {
        const newNode = new Node(student);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        console.log(`${student.name} has been added!`);
    }

    // Remove a student by email
    removeStudent(email) {
        if (!this.head) {
            console.log("No students to remove.");
            return;
        }
        if (this.head.data.email === email) {
            this.head = this.head.next;
            console.log(`Student with email ${email} has been removed.`);
            return;
        }
        let current = this.head;
        while (current.next && current.next.data.email !== email) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            console.log(`Student with email ${email} has been removed.`);
        } else {
            console.log(`Student with email ${email} not found.`);
        }
    }

    // Find a student by email
    findStudent(email) {
        let current = this.head;
        while (current) {
            if (current.data.email === email) {
                console.log("Student found:", current.data);
                return;
            }
            current = current.next;
        }
        console.log(`Student with email ${email} not found.`);
    }

    // Display all students
    displayStudents() {
        if (!this.head) {
            console.log("No students enrolled.");
            return;
        }
        let current = this.head;
        console.log("Enrolled Students:");
        while (current) {
            const { name, age, email, course } = current.data;
            console.log(`- ${name}, Age: ${age}, Email: ${email}, Course: ${course}`);
            current = current.next;
        }
    }
}

// Main menu function without prompt
function mainMenu(commands) {
    const list = new LinkedList();

    commands.forEach(command => {
        const { action, data } = command;
        switch (action) {
            case "add":
                if (data && data.name && data.age && data.email && data.course) {
                    const student = new Student(data.name, data.age, data.email, data.course);
                    list.addStudent(student);
                } else {
                    console.log("Invalid data for adding a student.");
                }
                break;
            case "remove":
                if (data && data.email) {
                    list.removeStudent(data.email);
                } else {
                    console.log("Invalid data for removing a student.");
                }
                break;
            case "find":
                if (data && data.email) {
                    list.findStudent(data.email);
                } else {
                    console.log("Invalid data for finding a student.");
                }
                break;
            case "display":
                list.displayStudents();
                break;
            default:
                console.log("Invalid action.");
        }
    });
}

// Example usage
const commands = [
    { action: "add", data: { name: "Alice", age: 20, email: "alice@example.com", course: "Math" } },
    { action: "add", data: { name: "Bob", age: 22, email: "bob@example.com", course: "Science" } },
    { action: "display" },
    { action: "find", data: { email: "alice@example.com" } },
    { action: "remove", data: { email: "bob@example.com" } },
    { action: "display" },
];

mainMenu(commands);

module.exports = { LinkedList, Student };
