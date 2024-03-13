/**
 * if () {
 *  // 
 * } else {
 * 
 * }
 * 
 * if () {
 *  //
 * } else if () {
 * 
 * } else {
 * }
 * 
 */

const input = prompt("Please enter your age");
console.log(input);

if(input >= 18) {
    console.log("Person is an adult");
} else if ( input > 5 && input < 18) {
    console.log("kid");
} else if (input <= 5) {
    console.log("toddler");
} else {
    console.log("invalid age");
}

// Ternary Operator ?


input > 18 ? "adult" : "kid";


