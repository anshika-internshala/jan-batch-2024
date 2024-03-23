// Object literal
// properties and methods

const user = {
    firstName : "Rahul",
    lastName: "Vishnoi",
    age: 45,
    printDetails: function() {
        console.log(`${this.firstName} ${this.lastName}`);
        // const printFullName = () => {
        //     console.log(`${this.firstName} ${this.lastName}`);
        // }
        // printFullName();  
    },

    updateUserAge: function(age) {
        this.age = age;
        console.log(this);
    }
    
};

user.updateUserAge(56);
console.log(user);

// function example() {
//     console.log(this);   // global object
// }

// window.example();

// 1. this keyword inside object method points to that object
// 2. Value of this keyword in global function is global object
// 3. But in "strict mode" , value of this keyword in function becomes undefined
// 4. Value of this keyword also depends on how the function is called (it becomes window if I call that function suing window.fun())
// 5. In case of arrow functions, there is no this
// 6. It takes the value of enclosing lexical context

user.hobbies = [];



user.firstName = "John";


delete user.age;
console.log(user);

