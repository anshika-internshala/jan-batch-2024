function sayHello() {
    console.log("Learning JS Functions");
}

sayHello();
sayHello();
sayHello();
sayHello();

function sum(num1, num2) {
    //console.log("sum of two numbers ", num1 + num2);
    return num1 + num2;
}

const sum = (num1, num2) => {
    return num1 + num2
};

const result = sum(20, 30);
console.log("sum of two numbers is ", result);

const value1 = prompt("Enter value"); // browser
console.log("value is ", value1);

// ES6 --- EcmaScript 2015

// Arrow Functions

