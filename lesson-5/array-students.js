const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];

console.log(averageStudentMark(10));
console.log(averageGroupMark(students));

function averageStudentMark(id) {
    const {marks} = students.find(student => student.id === id);
    const sumMarks = marks.reduce((acc, current) => acc + current);

    return sumMarks / marks.length;
}

function averageGroupMark(students) {
    return students.reduce((acc, {id}) => acc + averageStudentMark(id), 0) / students.length;
}
