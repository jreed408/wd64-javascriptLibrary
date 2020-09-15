/*
* ************
! HOISTING
* ************

    What is Hoisting?
        - JSpulls all variables and functions calls to the 'top' of their respective scope prior to being executed.
        - Only the declaration is pulled up, NOT the assignment.
*/

// console.log(hoistedVar);

// console.log(`How JS see hoistedVar: `, typeof hoistedVar);
// var hoistedVar = 'using var';
// let hoistedVar = 'using let';

// console.log(noVariable);

//? Hoisting in a Function
// this process is considered the same within a function. On the first pass, it reads it, pushes the declarations to the top and then executes them in the order that they are written.

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the global scope"
    console.log('Prior to declaring ', insideFunc)
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}

testHoist();
console.log(becomesglobal);

// It is best practice to ALWAYS declare variables regardless of whether they are in a function or global scope. This makes it clear how it should be handled.

//? Using LET
// the keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// The throws a ReferenceError due to ES6 not accepting undeclared variables. This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting Function
// Function Declarations:

hoistedFunc();

function hoistedFunc() {
    console.log('This is a hoisted function');
}

// Function Expressions:
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function() {
    console.log('Works?');
}

