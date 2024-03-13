let fruits = ["apple" , "mango" , "grapes", "guava" , 7, false];

console.log(typeof(fruits));

console.log(fruits.length);

console.log(fruits[5]);

fruits[1] = "oranges";
console.log(fruits);

// pop --- removes last element from the array

const value = fruits.pop();

console.log(value);

console.log(fruits);

// push --- adds new element at end of array

fruits.push("mango");
console.log(fruits);
