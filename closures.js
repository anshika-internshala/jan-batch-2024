function x() {
    var a = 10;

    function y(){
        console.log(a); // 10
    }

    return y;
}

const result = x();
result();


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();

function sum(a, b) {
    return a+b;
}

const ans = sum(2 , 3);

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const result1 = sum(1);
const result2 = result1(3);
const result3 = result2(4);
const finalResult = result3(2);

console.log(finalResult);


// console.log(sum(1)(2)(3)(4)); // 20
  