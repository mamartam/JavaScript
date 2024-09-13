// The for...in loop is used to iterate over the properties of an object (keys).
// It is less common for iterating over arrays, as it returns the property name (key), not the value.

// Task1
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
for (const key in person) {
    console.log(key);
}
console.log("-------------------------------");
// Task2
let car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (const value in car) {
    console.log(car[value]);
}
console.log("-------------------------------");
// Task3
let scores = { math: 85, english: 90, history: 75 };
let sum = 0;
for (const item in scores) {
    sum += scores[item];

}
console.log(sum);
console.log("-------------------------------");
// Task4
let book = { title: "1984", author: "George Orwell", pages: 328, genre: "Dystopian" };
let howMuchProperties = 0;
for (const proper in book) {
    howMuchProperties++;

}
console.log(howMuchProperties);
console.log("-------------------------------");
// Task5
let user = { username: "johnDoe", role: "admin", email: "john@example.com" };
for (const values in user) {
    console.log(user[values].toUpperCase());
}
console.log("-------------------------------");
// Task6
let calculator = {
    brand: "Casio",
    type: "Scientific",
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; }
};

for (const item in calculator) {
    // console.log(typeof (calculator[item]));
    if (typeof (calculator[item]) !== "function") {
        console.log(item);

    }
}
console.log("-------------------------------");
// Task7
let inventory = { apples: 10, oranges: 5, grapes: "out of stock", bananas: 7 };

for (const itemOf in inventory) {

    if (typeof (inventory[itemOf]) === "number") {
        console.log(inventory[itemOf]);

    }
}
console.log("-------------------------------");
// Task8
let dimensions = { width: 50, height: 100, depth: 200 };
let sumOfDemensions = 0;
for (const item in dimensions) {
    if (typeof (dimensions[item]) === "number") {
        sumOfDemensions += dimensions[item];

    }
}
console.log(sumOfDemensions);
console.log("-------------------------------");
// Task9
let product = {
    name: "Laptop",
    specs: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    },
    price: 1500
};
for (const key in product) {
    if (typeof product[key] === "object") {
        console.log(`${key}:`);
        for (const nestedKey in product[key]) {
            console.log(`  ${nestedKey}: ${product[key][nestedKey]}`);
        }
    } else {
        console.log(`${key}: ${product[key]}`);
    }
}
console.log("-------------------------------");
// Task10
let stats = { speed: 100, power: "strong", agility: 85, stamina: "high" };

for (const key in stats) {
    if (typeof (stats[key]) === "string") {
        delete stats[key];
    }
}

console.log(stats);
