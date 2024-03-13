// All String methods are immutable (original string remains unchanged)

let text = "My name is Anshika";

console.log(text.slice(11));
console.log(text.slice(2, 7)); // 3 4 5 6
console.log(text.slice(-7, -4));

// substring

console.log(text.substring(11));
console.log(text.substring(2, 7));
console.log(text.substring(-7)); // negative indexes are not supported . It considers it as 0

// substr --- deprecated

// replace

const replacedString = text.replace("My name is Anshika", "My name is Anshika Agarwal");
console.log(replacedString);
console.log(text);

let sentence = "Hello Hello John How are you ?";
const replacedSentence = sentence.replaceAll("Hello", "Hii");
console.log(replacedSentence);

const repeatedString = sentence.repeat(4);
console.log(repeatedString);