const users = [
  {
    firstName: "Anshika",
    lastName: "Agarwal",
    age: "23",
  },
  {
    firstName: "Anshul",
    lastName: "Agarwal",
    age: "37",
  },
  {
    firstName: "Ankit",
    lastName: "Agarwal",
    age: "78",
  },
  {
    firstName: "Anusha",
    lastName: "Agarwal",
    age: "17",
  },
  {
    firstName: "Himani",
    lastName: "Agarwal",
    age: "45",
  },
];

// Print firstnames of all users whose age is greater than or equal to 20

// ["Anshika ",  "" ,]

const filteredUsers = users.filter(function (user) {
  return user.age >= 20;
});

console.log("filtered users ", filteredUsers);

const finalUsers = filteredUsers.map((user) => user.firstName);

console.log("final users ", finalUsers);

// Chaining in JS

const users1 = users
  .filter((user) => user.age >= 20)
  .map((user) => user.firstName);

console.log("result...", users1);

//Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let students = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "John", rollNumber: 16, marks: 35 },
  { name: "Tiger", rollNumber: 7, marks: 55 },
];

// const updatedMarks = students.map((student) => {
//   if (student.marks < 60) {
//     student.marks += 20;
//   }
//   return student;
// });

// console.log(updatedMarks);

// const filteredStudents = updatedMarks.filter((student) => student.marks > 60);

// console.log(filteredStudents);

// const output = filteredStudents.reduce(function (total, curr) {
//   total = total + curr.marks;
//   return total;
// }, 0);

// console.log(output);

const finalResult = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks += 20;
    }
    return student;
  })
  .filter((student) => student.marks > 60)
  .reduce(function (total, curr) {
    total = total + curr.marks;
    return total;
  }, 0);

console.log(finalResult);
