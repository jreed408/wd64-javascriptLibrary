//! ASYNCHRONOUS PROGRAMMING
/*
    - synchronous programming is code read line by line

    - Asynchronous proggramming allows a program to do more than one thing at a time.
    - Makes it possible to run long-running actions without stopping the program to wait for a response.
    
*/

//? Synchronous Sample: Execution Stack
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

// "First Hello" - then "Second Hello" - then "End". Once the one before is completed, the next will execute.

//? Asynchronous Sample
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code')
    }, 2000); // setTimeout has two argunments: callback (our console log), and time measured in ms (milliseconds)
};
console.log('Hello World');
networkRequest();
console.log('The End');

// Event Loop: looks into the call stack and determines if it is empty or not. If empty, it condsiders if there is any waiting callback that needs to be executed (our console.log('Async Code')).

//! API

/* 
    API: Application Program Interface 

    - is NOT a database or server.
    - it allows us access points to the server
        - comes in the form of ENDPOINTS
        - endpoints directs us to sets of data

    ? REST API
    - Represantational State Transfer
        - creates an object of requested data by the client, send values in response to user.
    - Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)    
*/

//! FETCH()
/*
    - the fetch() method is an asynchronous method. Part of the browser - NOT JS.
    - the fetch() method starts the process of "fetching" a resource. Will return a promis and respond ONCE that promis fulfilled.

        Promise:
            - an unkown calue when created
            - represents the eventual fulfilled value or rehection (error)
        * Promises always one of these states:
            1. Pending: Initial state, neither fulfilled or rejected
            2. Fulfilled: Meaning the operation completed successfully
            3. Rejected: Meaning the operation failed
*/