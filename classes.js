// Base Template

class Customer {
    constructor(name1, age1, hobbies) {
        this.name = name1;
        this.age = age1;
        this.hobbies = hobbies;
    }

    get ageValue() {
        return this.age;
    }

    printDetails() {
        console.log(`Name and age of customer is ${this.name} and ${this.age}`);
    }
}

const customer1  = new Customer("Anshika", 23, ["cooking, learning"]);
console.log(customer1);
customer1.printDetails();
console.log(customer1.ageValue);

const customer2 = new Customer("Ankit", 21, ["dancing"]);
console.log(customer2);
customer2.printDetails();
console.log(customer2.ageValue);

class VIPCustomer extends Customer {
    constructor(name, age, hobbies, vipLabel) {
        super(name, age, hobbies);
        this.vipLabel = vipLabel;
    }

    get Label() {
        return this.vipLabel;
    }

    updateVIPLabel(label) {
        this.vipLabel = label;
        console.log("new label ", this.vipLabel);
    }
}

const vipCustomer1 = new VIPCustomer("John", 45, [], "platinum");
vipCustomer1.printDetails();
console.log(vipCustomer1.ageValue);
console.log(vipCustomer1.Label);
vipCustomer1.updateVIPLabel("gold");
console.log(vipCustomer1.Label);

