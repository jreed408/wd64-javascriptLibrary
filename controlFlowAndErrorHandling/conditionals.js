/*
* **************
 ! CONDITIONALS
* **************

? FALSY VALUES:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values, it is ecaluated as "falsy"

*/

/*

* ************
! IF
* ************

    - "If" something is true, fo "this thing"

*/

let light = 'on';

if(light == 'on'){
    console.log('The light is on');
};

let weather = 68;

if(weather <= 70){
    console.log('Wear a jacket.');
};

let rain = true;

if(weather < 70 && rain != false){
    console.log('It is a little chilly and will possibly rain.');
};

/*
* ************
! IF ELSE
* ************
    If/Else statements allow us the ability to write out a chain of events.
*/

let today = Math.floor(Math.random() * 100) + 1;

// let today = 75;

if(today <= 70){
    console.log('It is ' + today + ' degrees, wear a jacket')
} else {
    console.log('It is ' + today + ' degrees, no jacket is needed.')
}

/*

! CHALLENGE

    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = 'Joe'; // name can = Josh or Joshua and return line 77, if not return line 79

if(name == 'Josh' || name == 'Joshua'){
    console.log('Hello, ' + name + '!')
} else {
    console.log('Your name isn\'t Josh, what is your name?')
}

/*
* *********
! ELSE IF
* *********
    This is a condition that would be checked if the above condition was not met.
*/

let cookTime = 40;

if(cookTime === 45){
    console.log('Let us feast!')
} else if(cookTime >= 30){
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes.`)
} else if(cookTime >= 20){
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`)
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`)
}

// The end of the ELSE IF statement should have a simple "else" to finish it.

let elf = true;

if(elf == true){
    console.log('You are and elf! drink some syrup!')
} else {
    console.log('Syrup goes on pancakes, it\'s not a bevarage!')
}

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = Math.floor(Math.random() * 9) + 17;

if(age <= 17){
    console.log(`Sorry you are only ${age} years old, you\'re too young to do anything.`)
} else if(age >= 18 && age < 21){
    console.log(`You are ${age} years old, you can vote!`)
} else if(age >= 21 && age < 25){
    console.log(`You are ${age} years old, you can drink!`)
} else if(age >= 25){
    console.log(`You are ${age} years old, you can rent a car!`)
} else {
    console.log(`You are ${age}.`)
}

/*

* *************
! TERNARIES
* *************
    - This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a simple line.
*/

// let myName = 'Josh';

// if(myName == 'Josh'){
//     console.log(`Hello ${myName}!`)
// } else {
//     console.log(`Your name isn\'t Josh it is ${myName}.`)
// }

// condition ? if true : else result

let myName = 'Joe';

//      (1)                             (2)                                            (3)
myName === 'Josh' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`)

/*
    1: Condition
    2: True (if true)
    3: False (else)
*/

//! CHALLENGE
// Take this if/else statement and make it into a ternary.

let lampOn = false;
let daytime = true;

// if(lampOn == true && daytime != true) {
//     console.log('The lamp is on during the night')
// } else if(lampOn != true && daytime != true) {
//     console.log('The lamp is off during the night')
// } else if(lampOn == true && daytime == true){
//     console.log('The lamp is on during the day')
// } else if(lampOn != true && daytime == true) {
//     console.log('The lamp is off during the day')
// } else {
//     console.log('What lamp?')
// }

      lampOn == true && daytime != true ? console.log(`The lamp is on during the night.`) 
    : lampOn != true && daytime != true ? console.log(`The lamp is off during the night`) 
    : lampOn == true && daytime == true ? console.log(`The lamp is on during the day.`) 
    : lampOn != true && daytime == true ? console.log(`The lamp is off during the day.`) 
    : console.log(`What lamp?`);

/*

* **********
! SWITCH
* **********

    -executes a block of code depending on different cases.
*/

let instructor = `Ing`;

switch(instructor){
    case `Ing` :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
        // Once each case has been evaluated and we return a result, we need to note to "break" out from our switch statement.
    case `Zach` :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case `Josh` :
        console.log(`${instructor} is a part of the Software Dev Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
        // Need to use a default to help us catch those cases when noe are true.
}

instructor = `Amanda`;

switch(instructor){
    case `Ing`:
    case `Adam`:
    case `Eric`:
    case `Zach`:
    case `Donovan`:
        console.log(`${instructor} is part of the Web Dev team.`);
        break;
    case `Josh`:
    case `Amanda`:
    case `Casey`:
        console.log(`${instructor} is part of the Software Dev team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`);
}