let a = [ 6 , 5, 7, 3, 4];

// find any number which is divisible by 2

const result = a.find(num => num % 2 == 0);

const resultIndex = a.findIndex(num => num % 2 == 0);

console.log(a.indexOf(17)); // -1

console.log(result);
console.log(resultIndex);

console.log(a.includes(97));