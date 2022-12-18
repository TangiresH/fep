class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        let sumMarks = this.getMarksSum();
        let quantityMarks = this.marks.length;

        return sumMarks / quantityMarks;
    }

    getMarksSum() {
        return this.marks.reduce((acc, num) => acc + num);
    }
}

class Group {
    students = [];

    addStudent(student) {
        if (this.isStudent(student)) {
            this.students.push(student);
        }
    }

    isStudent(student) {
        if (student instanceof Student) {
            return true;
        }
    }

    getAverageMark() {
        let sumMarks = this.getAverageMarksSum();
        let quantityMarks = this.students.length;

        return sumMarks / quantityMarks;
    }

    getAverageMarksSum() {
        return this.students.reduce((acc, student) => acc + student.getAverageMark(), 0);
    }
}
const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));
group.addStudent({});


console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);