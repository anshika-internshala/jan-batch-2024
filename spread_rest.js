const arr = [1 , 2, 3, 4];

//const result = sum(arr[0], arr[1], arr[2], arr[3]);

const result = sum(...arr);

console.log(result);


function sum(a , b, c, d){
    return a+b+c+d;
}

// Rest

function sumOfAllNumbers(...args) {

    let sum = 0;

    for(let val of args) {
        sum = sum + val;
    }

    return sum;

}

const sum1 = sumOfAllNumbers(1 , 2, 3, 4, 5);

console.log(sum1);
