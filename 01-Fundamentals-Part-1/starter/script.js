/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');


console.log(40 + 8 + 23 - 10);

// Variable name convenctions
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
let PI = 3.1415;
let $function = 27;
let _name = 'Jonas';

// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof PI);
console.log(typeof javascriptIsFun);
console.log(typeof 'Jonas');

// Dynamic typing
javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Null
console.log(typeof null); // object

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // Uncaught TypeError: Assignment to constant variable.

var job = 'programmer';
job = 'teacher';

// Not a variable declaration but a variable definition
lastName = 'Schmedtmann';
console.log(lastName);

*/

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

