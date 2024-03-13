// checks for every element in the array and return true only if all the elements in the array matches condition

let a = [-1 , 2, 3, 4 , 5, 7];

// Check whether all elements of an array are positive or not

const result = a.every(num => num > 0);

console.log(result);

// some -- even if condition is true for one element it will return true

const result1 = a.some(num => num > 0);

console.log(result1);