// Promise is an object inside JS

let result = new Promise((resolve, reject) => {
        let value = false;

        if (value) {
            resolve("Promise is fulfilled");
        } else {
            reject("Promise is rejected");
        }
}) 

result.then((res)=> console.log(res));
result.catch(() => console.log("promise is rejected"));