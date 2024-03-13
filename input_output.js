function sum(a, b) {
    return a +  b;
}


const sum = (a, b) =>  { return a + b };


let a = [1, 2, 3, 4, 5];
let result = a.some((val) => {
    return val > 2;
});


// console.log(result);

// const x = [null, , null];
// console.log(x[1]);

// let x = [1, 2, 3, 4];
// let y = x.map((num) => num * 2);
// let z = y.reduce((acc, curr) => acc + curr, 0);

// console.log(z);

// // 2 + 4 + 6 + 8

// const x = 2.27;

// console.log(parseFloat(x));

// let calc = (x, y = 2) => {
//     return x > 3 ? x + y : x * y;
//   };
  
// console.log(calc(3));

// IIFE

// let result = (function (x) {
//     return x * 2;
// })(5);
  
// console.log(result);

// reverse method reverses the original array
// toReversed method creates new array

// let x = [1, 2];
// let y = x.toReversed();

// console.log(x, y);

// let x = [3, 2, 4, 5, 1, 10];

// let y = x.reduce((x, y) => {
//   if (x > y) return x;
//   return y;
// });

// console.log(y);

// const x1 = [1, , 3];
// console.log(x1.length);

// let a = [5, 6, 7, 8, 9];
// let [, x, , y] = a;

// console.log(x, y);

// let x = [1, 2, 3];
// let y = x.join("-"); // "1-2-3"
// let z = y.replaceAll("-", "");"123"

// console.log(typeof z);
// console.log(z);
// console.log(y);
// console.log(typeof y);

// let x = 1;

// console.log(Boolean(x));
// console.log(Boolean(!x));

// let x = [1, 2, 3];

// let y = x.at(2) * 2;

// console.log(y);

// let x = 0;
// let y = x++ + --x; 
// console.log(y);

// let x = [1, 2, 3];

// let y = x.join("-").split("-");"1-2-3"  ["1", "2", "3"]

// console.log(y);

// let x = "HELLO";
// let y = Array.from(x); // ["H", "E", "L", "L", "O"]

// console.log(y[1]);

// let x = "5";

// let y = Number(x) + 1;

// console.log(y);

// let n = [1, 2, 3];

// let x = n.map((val) => val ** val);

// console.log(x);

// let x = [1, 2, 3];

// x[10] = 7;

// console.log(x.length);

// let x = [1, 2, 3];
// let y = x.find((n) => n > 1);

// console.log(y);

// let a = [1, 2, 3, 4, 5];
// let index = a.indexOf(3);

// console.log(a[index]);

// let x = [1, 2, 3, 4, 5];
// let y = x.every((val) => val > 0);

// console.log(y);

// let rollNum = 23;
// let studentId = 6;

// [studentId, rollNum] = [rollNum, studentId];

// console.log(studentId);
// console.log(rollNum);

// type coercion

// let x = 12;
// let y = typeof x;

// console.log(y);

// console.log(typeof y);

// let x = (a = "b") => {
//     console.log(a);
//   };
  
//   x();
//   x("c");

// let x = [1, 2, 3];

// let y = x.filter((val) => val > 1);

// x = [4, 5, 6];

// y = y.map((val) => val * 2);

// console.log(x, y);

// let x = [
//     [1, 2],
//     [3, 4],
//   ];
  
//   let y = x.flat(); // [1 , 2, 3, 4]
  
//   console.log(x);
//   console.log(y);

// let x = [1, 2, 3];
// let y = [...x]; // [1 , 2, 3]
// let z = y.map((val) => val * 2); // [ 2, 4, 6]
// z[1] = 8; // [ 2, 8, 6]

// console.log(z);

// let x = true;
// let y = false;
// let z = x + y && x * y;

// console.log(z);

// let x = [1, 2, 3]; // [1 ,2 , 3, 4 , 5, 6]

// y [2, 3, 4 ]

// let y = x.map((num) => {
//   x.push(num + 3);
//   return num + 1;
// });

// console.log(y);

// let a = [1, 2, 3];
// a.push(a[2]++);

// console.log(a);

// let x = [null, 0, "0", false, "a"];
// let y = x.filter((val) => val);
// console.log(y);

// let x = 6;
// let y = typeof (x == 6);
// console.log(y);

// let x = [31, 2, 8];

// x.sort();
// console.log(x);

// let x = "one";
// console.log(Number(x));

// let x = "8";
// let y = +x; // 8

// console.log(y);
// console.log(typeof y);

// const arr = [1, 2, 3];
// arr.length = 0;
// arr.push(4);

// console.log(arr);

// const user = {
//     a : 1,
//     b : 2
// }

// console.log(user.a);

// const {a , b} = user;

// console.log(a);


// let { log } = console;
// log("Hello");

// let x = [1, 2, 3];
// let y = x.slice(); // [ 1, 2, 3, 4]
// y.push(4);

// console.log(x.length + y.length);

// const str = "How are you ?";

// console.log(str.startsWith("How"));
// console.log(str.endsWith("you ?"));
// console.log(str.endsWith("are", 7));

function multiply(factor) {
    return function (value) {
      return value * factor;
    };
  }
  
  const square = multiply(2);
  
  console.log(square(5));

