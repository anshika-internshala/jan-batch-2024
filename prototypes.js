// Every JS object has a prototype attached to it.
// This prototype is attached by JS Engine.
// Prototypes itself is an object

const fruits = ['apple', 'mango', 'grapes'];

const myObject = {
    a: 1, 
    b: 2,
    sum() {
        return this.a + this.b
    }
}

const object2 = {
    name: "abc",
    a: 3
}

const result = myObject.sum();
console.log(result);

console.log(Object.getPrototypeOf(fruits));

Array.prototype.myMap = function () {
    console.log("My map method");
}

const numbers = [ 4 , 5, 6];
numbers.myMap();

// Prototype Inheritance

object2.__proto__ = myObject;