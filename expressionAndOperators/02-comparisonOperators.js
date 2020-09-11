// ? Equal
'3' == 3;
console.log("3" == 3);
console.log('bob' == 'Bob'); // false

// == is equal

/*
    - JS is helpful and does something known as coercion when comparing values
        - coercion is the process of converting a value from one type to another.
*/

// ? Strict Equal
console.log("3" === 3);
console.log(3 === 3);

// === is strictly equal

console.log('Bob' === 'Bob');

// ? Not Equal
console.log('3' != 3); //false

// ? Strict Not Equal
console.log('3' !== 3); //true

// ? Greater Than
3 > 2;

// ? Less Than
2 < 3;

// ? Greater Than or Equal To
3 >= 2; // => fat arrow function not to be confused with the comparison

// ? Less Than or Equal To
2 <= 3;

// ? And
2 && 3;

// ? Or
2 || 3;
