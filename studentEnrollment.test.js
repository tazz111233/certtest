const { LinkedList, Student } = require('./studentEnrollment'); // Update with the correct path to your file

describe("LinkedList class tests", () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test("should add a student to the list", () => {
        const student = new Student("Alice", 20, "alice@example.com", "Math");
        list.addStudent(student);

        expect(list.head.data).toEqual(student);
    });

    test("should add multiple students to the list", () => {
        const student1 = new Student("Alice", 20, "alice@example.com", "Math");
        const student2 = new Student("Bob", 22, "bob@example.com", "Science");

        list.addStudent(student1);
        list.addStudent(student2);

        expect(list.head.data).toEqual(student1);
        expect(list.head.next.data).toEqual(student2);
    });

    test("should remove a student by email", () => {
        const student1 = new Student("Alice", 20, "alice@example.com", "Math");
        const student2 = new Student("Bob", 22, "bob@example.com", "Science");
        list.addStudent(student1);
        list.addStudent(student2);

        list.removeStudent("bob@example.com");
        expect(list.head.data).toEqual(student1);
        expect(list.head.next).toBeNull();
    });

    test("should not remove a student if email is not found", () => {
        const student = new Student("Alice", 20, "alice@example.com", "Math");
        list.addStudent(student);

        console.log = jest.fn(); // Mock console.log
        list.removeStudent("nonexistent@example.com");

        expect(console.log).toHaveBeenCalledWith("Student with email nonexistent@example.com not found.");
    });

    test("should find a student by email", () => {
        const student = new Student("Alice", 20, "alice@example.com", "Math");
        list.addStudent(student);

        console.log = jest.fn(); // Mock console.log
        list.findStudent("alice@example.com");

        expect(console.log).toHaveBeenCalledWith("Student found:", student);
    });

    test("should not find a student if email does not exist", () => {
        console.log = jest.fn(); // Mock console.log
        list.findStudent("nonexistent@example.com");

        expect(console.log).toHaveBeenCalledWith("Student with email nonexistent@example.com not found.");
    });

    test("should display all students", () => {
        const student1 = new Student("Alice", 20, "alice@example.com", "Math");
        const student2 = new Student("Bob", 22, "bob@example.com", "Science");

        list.addStudent(student1);
        list.addStudent(student2);

        console.log = jest.fn(); // Mock console.log
        list.displayStudents();

        expect(console.log).toHaveBeenCalledWith("Enrolled Students:");
        expect(console.log).toHaveBeenCalledWith("- Alice, Age: 20, Email: alice@example.com, Course: Math");
        expect(console.log).toHaveBeenCalledWith("- Bob, Age: 22, Email: bob@example.com, Course: Science");
    });

    test("should handle removing a student from an empty list", () => {
        console.log = jest.fn(); // Mock console.log
        list.removeStudent("alice@example.com");

        expect(console.log).toHaveBeenCalledWith("No students to remove.");
    });

    test("should handle displaying an empty list", () => {
        console.log = jest.fn(); // Mock console.log
        list.displayStudents();

        expect(console.log).toHaveBeenCalledWith("No students enrolled.");
    });
});
