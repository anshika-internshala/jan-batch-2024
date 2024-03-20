// synchronous code
// function step1(num) {
//    setTimeout(() => {
//     return num + 1;
//    }, 0);
// }

// function step2(num) {
//     console.log(num);
//     console.log("step 2");
//     return num + 2;
// }

// function step3(num) {
//     console.log("step 3");
//     return num + 3;
// }

// function performTask(){
//     let result = 0;

//     result = step1(result); // async
//     result = step2(result);
//     result = step3(result);

//     console.log("result", result);
// }

// performTask();

// Callbacks

function step1(num, callback) {

    setTimeout(() => {
        const result = num + 1; // 1
        callback(result);
    }, 0);
    
}

function step2(num, callback) {
    const result = num + 2; // 3
    callback(result);
}

function step3(num, callback) {
    const result = num + 3; // 6
    callback(result);
}

// Pyramid of Doom or Callback Hell

function performTask() {
    step1(0, (result1) => {
        step2(result1, (result2) => {
            step3(result2, (result3) => {
                console.log("result ", result3);
            })
        })
    })
}

performTask();