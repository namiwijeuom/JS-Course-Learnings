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

// String template literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 11;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗😁 ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years😒`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // 10

// 5 falsy values: 0, '', undefined, null, NaN(Not a Number)
console.log(Boolean(0));
console.log(Boolean(undefined));

// all others are truethy values
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
}
else {
    console.log('You should get a job!');
}

let height = 120;
if (height) {
    console.log('YAY! Height is defined');
}

else {
    console.log('Height is UNDEFINED');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

console.log(typeof favourite);

if (favourite == 23) {
    console.log('Cool! 23 is an amazing number!');
}

else if (favourite === 8) {
    console.log('8 is also a cool number');
}

else {
    console.log('Number is not 23 or 7');
}

// logic operators
const hasDriverLicense = false; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!');
}

else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
}

else {
    console.log('Someone else should drive...');
}

// switch statement - Does a strict comparison
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }
// else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// }
// else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// }
// else if (day === 'friday') {
//     console.log('Record videos');
// }
// else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// }
// else {
//     console.log('Not a valid day!');
// }

*/

// statement vs expression
// expression produces a value
// statement is like a full sentence that does not produce a value

// conditional (ternary) operator
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
}
else {
    drink2 = 'water 💧';
}
console.log(drink2);
