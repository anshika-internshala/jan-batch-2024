let n = [ 1, 2, 3, 4, 5];
let x = [ 6 , 7 , 8, 9 ,10];

const result1 = n.splice(2, 3, 78, 89, 90, 777);
console.log(result1);
console.log(n);

let newArray = n.concat(x);
console.log(newArray);

const value = n.pop(); // returns popped value
console.log(value);

const result = n.push(6); // returns new length of array
console.log("result", result);
console.log(n);



// shift  pop

n.shift();
console.log(n);

// unshift , push

n.unshift(9);
console.log(n);

delete n[1];
console.log(n);
console.log(n.length);

// reverse

n.reverse();

console.log(n);


// slice

const newArray1 = n.slice(2,5);

console.log(newArray1);

