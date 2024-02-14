/*
// strict mode activation
// 1. strict mode is a special mode that we can activate in JavaScript
// 2. It helps us to write a secure JavaScript code by catching common mistakes and "unsafe" actions
// 3. It prevents the use of certain elements of the language
// 4. It creates visible errors for the developer
// 5. It prevents the use of undeclared variables
// 6. It prevents the use of reserved words
// 7. It prevents the use of duplicate parameter names
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;
//const if = 23;


// Function
// 1. A function is a piece of code that we can reuse over and over again
// 2. We can pass data to a function and return data from a function
// 3. We can use the function to structure our code
// 4. We can use the function to organize our code

function logger() {
    console.log('My name is Namina');
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// Function Declarations vs. Expressions
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Function
// 1. Arrow function is another way to write a function
// 2. It is a special form of function expression
// 3. It is a more modern way to write a function
// 4. It is a shorter way to write a function
// 5. It is a more concise way to write a function

const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2000, 'Namina'));

*/

//Arrays
// 1. Arrays are a data structure that can hold multiple values
// 2. Arrays are a collection of variables that can have more than one value
// 3. Arrays are a collection of elements
// 4. Arrays are a collection of items

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(`The length of the array is ${friends.length}`);

friends[2] = 'Jay';
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

const firstName = 'Namina';
const lastName = 'Wijetunga';
const age = 2024 - 2000;
const job = 'student';
const namina = [firstName, lastName, age, job, friends];
console.log(namina);
