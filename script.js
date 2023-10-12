//complete this code
 class Person {
constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(age) {
        this._age = age;
    }
}

 class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

 class Teacher extends Person {
       constructor(name, age) {
        super(name, age);
    }

    teach() {
        console.log(`${this.name} is teaching.`);
    }
}
const student = new Student('John', 20);
student.study(); // Outputs: Alice is studying.

const teacher = new Teacher('Alice', 35);
teacher.teach(); // Outputs: Bob is teaching.



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


// Example usage:
