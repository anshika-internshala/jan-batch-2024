console.log("Javascript");
console.log("single threaded");
console.log("synchronous");
// setTimeout --- browser API 

// JS does not wait for anyone

setTimeout(() => {
    console.log("Takes 2s");
}, 2000);

setTimeout(() => {
    console.log("setTimeout added");
}, 1000);

setTimeout(() => {
    console.log("zero Timeout");
}, 0);

console.log("Asynchronous Javascript");

// var a = 10;

// function abc() {
//     console.log("abc");
//     var x = 10;

//     b();
//     function b() {
//         console.log(x);
//     }
// }
// abc();
// console.log(a);