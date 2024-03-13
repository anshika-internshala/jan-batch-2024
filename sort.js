const arr = ["Mango", "Apple", "Orange"];
arr.sort();

console.log(arr);

const numbers = [ 100 , "mango" , 453, 12];
//numbers.sort((a, b) => a-b);
const newArray = numbers.toSorted((a, b) => b-a);

console.log(newArray);

//console.log(numbers);