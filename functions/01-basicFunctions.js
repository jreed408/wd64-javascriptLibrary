/*
* ***********
! FUNCTIONS
* ***********

Functions are process that we call ipon to run an action.
    - Take an input so that it can process it, modifiy it or just respond to it.
    - Returns a value (but not always)
    - Can be invoked (called upon) as often as we need.
*/

// (1)    (2)
function hi(){
    console.log(`Hi!`);
}

//1: Keyword
//2: Name of the function and the parenthesis for the parameter.

// (1)        (2)    (3)
function functionName(){
//      (4)
    return value;
};
//  (5)
functionName();

/*
    - 1: KEYWORD "function"
    - 2: NAME of "functionName"
    - 3: PARAMETER "currently empty"
    - 4: STATEMENT "to process"
    - 5: INVOKE "on switch"
*/

//? Function Declaration
// A chunk of code that performs a set action when it is invoked
function funcOne(){
    console.log(`Statement Here`);
}

funcOne();

//? Function Expression
// Assigning a function to a variable is what is called an EXPRESSION
let first = function funcTwo(){
    console.log(`Second Statement`);
}

first();

//? Anonymous Function
// Anonymous Functions are stored in memory but the runtime doesnt't automatically create a reference to it.

let anon = function(){
    console.log('anon function')
}

anon();

