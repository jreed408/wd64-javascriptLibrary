//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

/*
// Switch Ranges use switch(true)
// ! Rendition 1
let percGrade;
percGrade = Math.floor(Math.random() * 101);
// percGrade =100;
let grade;

// Force switch(true) to continue loop and not break

switch(true) {

    case (percGrade <= 100 && percGrade >= 89):
        console.log(`Scored an A with a ${percGrade} %.`);
        break;

    case (percGrade <= 88 && percGrade >= 79):
        console.log(`Scored a B with a ${percGrade} %.`);
        break;

    case (percGrade <= 78 && percGrade >= 66):
        console.log(`Scored a C with a ${percGrade} %.`);
        break;

    case (percGrade <= 65 && percGrade >= 59):
        console.log(`Scored a D with a ${percGrade} %.`);
        break;

    default:
        console.log(`Scored a F with a ${percGrade} %.`);
        break;
}
*/

// ! Rendition 2

/*
// Use only if checking exact percGrade
// percGrade = 100;
*/

let percGrade = Math.floor(Math.random() * 101);
let grade;

switch(true) {

    case (percGrade <= 100 && percGrade >= 89):
        grade = `an A`;
        break;

    case (percGrade <= 88 && percGrade >= 79):
        grade = `a B`;
        break;

    case (percGrade <= 78 && percGrade >= 66):
        grade = `a C`;
        break;

    case (percGrade <= 65 && percGrade >= 59):
        grade = `a D`;
        break;

    default:
        grade = `a F`;
        break;
}

console.log(`Scored ${grade} with a ${percGrade} %.`)
