const user = {
    firstName: "John",
    city: "NewYork",
    greetings(age, hobby) {
        console.log(`Greetings from ${this.firstName} from ${this.city}`);
        console.log(`My age is ${age}`);
        console.log(`My hobby is ${hobby}`);
    }
}

//user.greetings();

const user2 = {
    firstName: "Alice",
    city: "London"
}

// const users = [
//     {
//         firstName: "Alice",
//         city: 'bombay'
//     },
//     {
//         firstName: "Annie",
//         city: 'bangalore'
//     }
// ]

// users.forEach(member => {
//     user.greetings.call(member);
// })

user.greetings.call(user2, 20, "cooking");
user.greetings.apply(user2, [ 20, "cooking"]);


// call()

// bind

const greetFunc = user.greetings.bind(user2, 20, "cooking");
greetFunc();