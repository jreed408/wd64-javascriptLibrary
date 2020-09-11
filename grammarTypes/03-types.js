/*
* **************************************************
                      ! TYPES
* **************************************************

* **************************
? Data and Structure Types
* **************************

    - Primitive Data Tyes:
        - boolean
        - undefined
        - number
        - string
            - bigINT*
            - symbol*
        - null
        - object
        - function
*/

// ? BOOLEANS
//* ************************

// A boolean has two possible values: true and false

let on = true;
let off = false;

console.log(true);

// ? NULL
// a null value is an empty value. Think of it as an empty container that has space to fill.

let empty = null;
console.log(empty);

// ? UNDEFINED
// No value has been assigned to a container

let undef = undefined;
console.log(undef);
let password
console.log(password); // password returns undefined because the variable hasn't been created.

/*
    - Null is like a container with nothing in it.
        - Null you can trust as zero, - Undefined not so much.
    - Undefined is when a variable has never been set, or hasn't been created yet.
*/

// ? NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);
// JS gives us space for 15 9s before rounding up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed be aware.

let whatIF = (0.2 * 10 + 0.1 * 10);
console.log(whatIF);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
// console.log('.' + whatIF);

// ? STRINGS

// Strings represent text and are wrapped in either single or double quotes

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ);

// ? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);
// Analogy... writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other.

console.log(typeof addThese);
console.log(typeof addTheseAlso);

// We can use an operator called 'typeof' that returns a string that tells us exactly what our variable "type" is.

let stringToNumber = Number('1150');
console.log(stringToNumber);

// We can reduce our typing by setting console log to a variable that doesn't change.
const log = console.log;
log('test');

// ? OBJECTS
/*
    - Objects are used to store many values instead of a singular value.
    - Consider these as a collection of various properties.
    - denoted by curly brackets: {}
*/

let frodo = {
    race: 'hobbit', //string
//  (1)     (2)
    rings: 1, //number
    sting: true, //boolean
}

console.log(frodo);
console.log(typeof frodo);
//1 : Key
//2 : Value

let obj = {
    key: 'value'
}

console.log(obj);

// ? ARRAYS
/*

    - Containers that hold a list of items
    - denoted by square brackets: []
    - all items are within the square brackets.
    - regardless of datatype, each item is separated by a comma.

*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three']
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own.

let objArr = [{
    race: 'hobbit',
    rings: 1,
    sting: true,
}]

console.log(objArr);

// ? ADDITION vs CONCATENATION

/*
    - JS sees the "+" symbol in two different ways.
        - when combined with numbers, uses bult-in math functionality.
        - When combined with strings, it ignores the math and concats the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff); // recognizes this as a string with typeof

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Joshua';
let nickName = "'Jay'";
let lastName = 'Reed';
let houseNumber = 1234;
let street = 'N. Home St.';
let city = 'Cityville';
let state = 'ST';
let zipCode = 12345;
let astLine = '*************************************';
let br = '\n';
let spc = ' ';
let commaspc = ', ';
console.log(astLine + br + firstName + spc + nickName + spc + lastName + br + houseNumber + commaspc + street + commaspc + city + commaspc + state + br + zipCode + br + astLine);

// ? String: Properties
/*
    - Strings have properties, or the qualities associated with that string.
    - the length of astring is a property.
*/

let myName = 'Joshua';
console.log(myName.length);

// ? String: Methods
/*
    - methods are tools that can help us manipulate our data
*/

let myNameIs = 'Joshua';
console.log(myNameIs.toUpperCase()); // this is a method that changes a string to uppercase
console.log(myNameIs.toLowerCase()); // this is a method that changes a string to lowercase

let home = 'My home is Fishers';
console.log(home.includes('Fishers'));
