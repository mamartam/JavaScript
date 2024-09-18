let words = ['Florin', 'Liam', 'Jai', 'Ivan'];

console.log(words);
console.log(words.sort());

let numbers = [3, 8, 4, 56, 6, 12, 0];
console.log(numbers);
let res = numbers.sort(function (a, b) {
    return a - b;
})
console.log(res);
///////////

let reversedArray = words.toReversed();
console.log(reversedArray);


let x = 0.1;
let y = 0.2;
let z = x + y
console.log(z);