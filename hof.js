// Higher Order Functions --- work on arrays

// Functions which take another function as parameter

let arr = [ 1 , 2 , 3, 4, 5];

// print all numbers of this array

//length = gives length of array
// arr.length = 5

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// forEach ----> hof which iterates over elements of array
// callback function --- function which is passed as argument to another function
// [ 1, 2, 3,4 , 5]
arr.forEach(function (num, index) {
    console.log(index , num);
})

//arr.forEach((num) => console.log(num));
function x() {
    console.log("Hii");
}

function y(x) {
    x();
}

y(x);

// Higher Order Function ---- function which takes another function as parameter

// Callback function ----  function which is passed as argument to another function