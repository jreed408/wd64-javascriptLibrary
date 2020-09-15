/*
* ***********************
! CONSTRUCTOR FUNCTIONS
* ***********************
    - Functions allows us to easily create a unique solution for different circimstances by using parameters.
        - creating several different objects with the same keys but different values.

*/

//Opt 1:
let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
};
let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
};
let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
};

//Opt 2
// (1)      (2)             (3)
function Person(name, age, canVote) {
//   (4)  (5)     (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

// console.log(typeof Person);
//            (7)   (8)
let person4 = new Person('James', 80, true);
console.log(person4);

/*
    1. The keyword (function)
    2. The function NAME. for Constructor functions, the name should be capitalized.
    3. the parameters. These will be the valuess of the object once this function is in use.
    4. the 'this' keyword. 'this' gives us the ability to refer back to whatever called or whatever activates it. In this casem 'this' refers to 'Person' 
    5. this will be a key of the new object we will create. This is NOT refering to the parameter.
    6. This is refering to the parameter we pass through our constructor function.
    7 & 8: This 'new; keyword is calling our Person function, creating a new person with the values we passing as arguments, and storing that person in a variable.
*/