// Task 1 - Customer Profile
let customer = { //Customer Infomation
    name: "Johnj Doe",
    age: 35,
    email: "john.doe@email.com"
};
console.log('name: ${customer.name}') //Log each property
console.log('age: ${customer.age}')
console.log('emial: ${customer.email}')

// Task 2 - Order Details
const order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function () {
        console.log ('OrderID: ${this.orderID}');
        console.log ('total Amount: ${this.totalAmount}');
        console.log ('Status: ${this.status}');
    }
};
