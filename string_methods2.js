let sentence = "Hello, Internshala ,  !!";
console.log(sentence.trim().length);

console.log(sentence.trimEnd());

// split method

const splittedString = sentence.split(",");

console.log(splittedString);

// concat

let myIntroduction = "My name is Anshika";
let myFavouriteColor = "red";

console.log(myIntroduction.concat("and my favourite color is ").concat(myFavouriteColor));

console.log(`${myIntroduction} and my favourite color is ${myFavouriteColor}`);

let firstName = "Anshika";
let lastName = "Agarwal";

const fullName = firstName.concat(lastName);

console.log(fullName);

// upper case

console.log(firstName.toUpperCase());

let newString = "ANSHIKA AGARWAL";

console.log(newString.toLowerCase());

// EcmaScript 2015 ---- major revision done to JavaScript

// ES6 features

// Template Literals

// const fullSentence = firstName + lastName;
// console.log(fullSentence);

const fullSentence = `${firstName} ${lastName}`;
console.log(fullSentence);


// type coercion






