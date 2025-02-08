// Task 1 - Customer Profile
let customer = { //Customer Infomation
    name: "Johnj Doe",
    age: 35,
    email: "john.doe@email.com"
};
console.log ('name: ${customer.name}') //Log each property
console.log ('age: ${customer.age}')
console.log ('emial: ${customer.email}')


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


// Task 3 - Shopping Cart
let cartIteams = [ //Iteams
    "Popcorn",
    "Sour Patch Kids", 
    "Grape Slushy"
] 
cartIteams.push("Nerds")
//["Popcorn", "Sour Patch Kids", "Grape Slushy", "Nerds"]
cartIteams.pop ()
//["Popcorn", "Sour Patch Kids", "Grape Slushy"]
cartIteams.unshift ("Popcorn")
//["Popcorn", "Popcorn", "Sour Patch Kids", "Grape Slushy"]
cartIteams.shift ()
//["Popcorn", "Sour Patch Kids", "Grape Slushy"]
console.log(cartIteams) 
//["Popcorn", "Sour Patch Kids", "Grape Slushy"]


// Task 4 - Price Adjustments
let price = [100, 200, 300]
let discountedPrices = price.map(price => price * 0.1);
console.log(discountedPrices) // Output [10, 20, 30]


// Task 5 - Product Availability
const inventory = [5, 0, 12, 8, 0]
const availableProducts = inventory.filter(quantity => quantity > 0); //Remove products with 0 quantity 
console.log(availableProducts) // Output = [5, 12, 8]

// Task 6 - Revenue Calculation
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((total, sale) => total + sale, 0); // Reduse sales to a single unit
console.log(totalRevenue) //Output = 1400

// Task 7 - Customer Search
 let customers = ["Alice", "Bob", "Charlie", "David"];
 let findCustomer = customers.find (customer => customer == "Charlie");
 console.log(findCustomer) // output "Charlie"

 // Task 8 - Tax Calculation
 function calculateTax(amount, taxRate) {
    return (amount * taxRate)
 }
 console.log(calculateTax(500, 0.1)) // output = 50

// Task 9 - Discount Application
function calculateDiscount(price, discount) {
    return (price * discount)
}
console.lod(calculateDiscount(1000, 0.25)) // output = $250 off

// Task 10 - Loyalty Points
const calculatePoints = (revenue, points) => revenue/10;
console.log(calculatePoints(1200)) //Output = 120 points


