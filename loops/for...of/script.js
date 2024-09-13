
// For...of loop is similar to for loop, but it is easier and developer
// doesn't need to care about indexes, iteration and other staff.

// For...of usually used to work with arrays

// Task1
let fruits = ["apple", "banana", "cherry", "date"];
for (fruit of fruits) {
    console.log(fruit);

}
console.log("------------------------------");
// Task2
let numbers = [5, 10, 15, 20];
let sum = 0;
for (numb of numbers) {
    sum += numb;
}
console.log(sum);
console.log("------------------------------");
// Task3
let words = ["hello", "world", "javascript"];
for (word of words) {
    console.log(word.toUpperCase());
}
console.log("------------------------------");
// Task4
let str = "JavaScript is amazing";
let count = 0;
for (letter of str) {
    if (letter === "a") {
        count++;

    }
}
console.log(count);
console.log("------------------------------");
// Task 5
let differentWords = ["cat", "elephant", "tiger", "hippopotamus"];
var theLongestWord = "";
for (word of differentWords) {

    if (word.length > theLongestWord.length) {
        theLongestWord = word;
    }
}
console.log(theLongestWord);
console.log("------------------------------");
// Task6
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
for (person of people) {
    console.log(person.name);
}
console.log("------------------------------");
// Task7
let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumOfEvenNumbers = 0;
for (number of someNumbers) {
    if (number % 2 == 0) {
        sumOfEvenNumbers += number;

    }
}
console.log(sumOfEvenNumbers);
console.log("------------------------------");
// Task 8
let simpleWords = ["hello", "world", "javascript"];
for (word of simpleWords) {
    console.log(word.split('').reverse().join(''));

}
console.log("------------------------------");
// Task 9
let allWords = ["apple", "banana", "cherry", "date", "elderberry"];
let wordsWichHaveMoreThan5Letters = 0;
for (word of allWords) {
    if (word.length > 5) {
        wordsWichHaveMoreThan5Letters++;
    }
}
console.log(wordsWichHaveMoreThan5Letters);
console.log("------------------------------");
// Task 10
let oddAndEvennumbers = [12, 23, 34, 45, 56, 67, 78];
for (numb of oddAndEvennumbers) {
    if (numb % 2 !== 0) {
        console.log(numb);

    }
}