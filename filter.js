// filter ----> return a new array based on a condition

let a = [1, 2, 3, 4, 5];

// take out all even numbers of array

const evenNumbers = a.filter(function (num) {
  return num % 2 == 0;
});

console.log("even numbers", evenNumbers);

let students = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "John", rollNumber: 16, marks: 35 },
  { name: "Tiger", rollNumber: 7, marks: 55 },
];

const filteredStudents = students.filter(
  (student) => student.marks > 60 && student.rollNumber > 15
);

console.log(filteredStudents);