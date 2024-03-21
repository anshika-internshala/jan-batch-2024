// fetch("https://dummyjson.com/users")
//   .then((data) => data.json())
//   .then((result) => console.log(result));

// async/await

// async function fetchData() {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     console.log(data);
// }

//fetchData();

console.log("Hello");

// setTimeout(() => {
//     console.log("Code is executed after 1s");
// }, 2000);

// setTimeout(() => {
//     console.log("Code is executed after 0s");
// }, 0);

console.log("Last call!");

const data = new Promise((resolve, reject) => {
   
    setTimeout(() => {
       resolve("Hello Promise!!")
    }, 0);
    
})

data.then(res => console.log(res));