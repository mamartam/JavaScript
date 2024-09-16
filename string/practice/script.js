// Task1
// Write a function that takes a string and returns its length.
function lengthOfTheString(str) {
    return str.length;
}
let line = "Hello World";
console.log(lengthOfTheString(line));

// Task2
// Write a function that takes an uppercase string and converts it to lowercase.

function strToLowerCase(str) {
    return str.toLowerCase();
}
console.log(strToLowerCase(line));

// Task3
// Write a function that takes a lowercase string and converts it to uppercase.
function strToUpperCase(str) {
    return str.toUpperCase();
}
console.log(strToUpperCase(line));

// Task4
// Write a function that takes a string and an index and returns the character at that index.

function findCharacterAtIndex(str, index) {
    return str.charAt(index);
}
console.log(findCharacterAtIndex(line, 2));


// Task5
// Write a function that takes a string and an index, then returns the
// Unicode value of the character at that index.

function whatIsTheUniCode(str, index) {
    return str.charCodeAt(index);
}
console.log(whatIsTheUniCode(line, 2));

// Task6
// Write a function that takes a string and an index and returns the character at that index.
// Test it with both positive and negative indices.

function whatIsTheChar(str, index) {
    return str.at(index);
}

console.log(whatIsTheChar(line, 2)); //l
console.log(whatIsTheChar(line, -3)); //r

// Task7
// Write a function that takes a string and two numbers (start, end),
// then returns a substring using the slice() method.
function sliceTheString(str, start, end) {
    return str.slice(start, end);
}
console.log(sliceTheString(line, 2, 8));

// Task8
// Write a function that takes two strings and concatenates them.

function concatTwoStrings(str1, str2) {
    return str1.concat(str2);
}
let line1 = "Hello ";
let line2 = "World";
console.log(concatTwoStrings(line1, line2));

// Task9
// Write a function that checks if a string ends with a specific word or character.

function ifEnds(str, character) {
    return str.endsWith(character);
}
console.log(ifEnds(line, "d"));
console.log(ifEnds(line, "!"));

// Task10
// Write a function that takes a Unicode value and returns the corresponding character using fromCharCode().

function fromUniCodeToChar(code) {
    return String.fromCharCode(code);
}
console.log(fromUniCodeToChar(108));


// Task11
// Write a function that checks if a specific word or character is present in a string.

function doesInclude(str, character) {
    return str.includes(character);
}

console.log(doesInclude(line, "W"));
console.log(doesInclude(line, "!"));
console.log(doesInclude(line, "Hello"));


// Task12
// Write a function that returns the first occurrence of a specific character in a string.

function firstOccurence(str, character) {
    return str.indexOf(character);
}
console.log(firstOccurence(line, "l"));


// Task13
//Write a function that returns the last occurrence of a specific character in a string.

function lastOccurence(str, character) {
    return str.lastIndexOf(character);
}
console.log(lastOccurence(line, "l"));
console.log(lastOccurence(line, "!"));

// Task14
// Write a function that finds all occurrences of a pattern in a string using a regular expression.

function matchFunction(str, find) {
    const regex = new RegExp(find, "gi"); // Create a dynamic regular expression
    return str.match(regex);
}

let line3 = "The rain in SPAIN stays mainly in the plane.";
console.log(matchFunction(line3, "ain"));

// Task15
// Write a function that repeats a string three times.

function repeatItAgain(str, times) {
    return str.repeat(times);
}
console.log(repeatItAgain(line3, 5));

// Task16
// Write a function that replaces the word "end" with "END" in a given string.

function replaceIt(str, from, to) {
    return str.replace(from, to);
}
let str1 = "front end";
console.log(replaceIt(str1, "end", "END"));

// Task17
// Write a function that searches for a word in a string and returns its position.

function whatIsThePosition(str, character) {
    return str.search(character);
}
console.log(whatIsThePosition(line, 'ello'));

// Task18
function splitTheString(str, separator, limit) {
    return str.split(separator, limit);
}
console.log(splitTheString(line, ' ',));
console.log(splitTheString(line, '',));
console.log(splitTheString(line3, 'a', 2)); // the limitation 2, makes it output just first 2 parts

// Task19
// Write a function that checks if a string starts with a specific word.

function ifStartsWithIt(str, start) {
    return str.startsWith(start);
}
console.log(ifStartsWithIt(line, "Hello"));
console.log(ifStartsWithIt(line, "World"));

// Task20
// Write a function that removes leading and trailing whitespace from a string.
function trimIt(str) {
    return str.trim();
}
let lastStr = "            Hello   World!     ";
console.log(lastStr);
console.log(trimIt(lastStr));
