// const day = new Date().getDay();

// console.log(day);

const day = 67;

switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Please enter correct value");
}

// no is divisible by 2 or not

let num = 9;

if (num % 2 == 0) {
    console.log("number is divisible by 2");
} else {
    console.log("not divisible by 2")
}