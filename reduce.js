// get a single value as a result

let arr = [ 1, 2, 3, 4, 5];

// print sum of elements of array

// output ---  15

let sum = 0;

for(let i=0; i < arr.length; i++) {
    sum = sum + arr[i];
}

const sum1 = arr.reduce(function(curr, sum ) {
    return curr + sum; 
    // sum = 1 + 0 = 1 
    // 2 + 1 = 3
    // 3 + 3 = 6
    // 4 + 6 = 10
    // 5 + 10 = 15
}, 0);

console.log("sum1 ", sum1);

let array = [ 2 ,3 ,4 ,5 ,6 ];


// multiplication of all elements of array

const result = array.reduce(function(curr, mul) {
    return curr * mul;
}, 1)

console.log("result ", result);

// Given an array of objects users, print user of particular age along with their frequency.

// Print sum of marks of all the student

const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
];

//{26: 2 , 75:1, 50: 1}

// acc = {26: 2, 75: 1, 50:1 }

const output = users.reduce(function(acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }

    return acc;

}, {})

console.log(output);