/*
* *************
! ARRAYS
* *************
*/

//? POPULATING & REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

// JS counts starting at 0. So in this array, it would be 0-2.
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.

let students = ['tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];

console.log(students instanceof Array); // the instanceof operator is used to check the type of an obhect at run time. Remember that arrays are technically objects.

console.log(students[2]);


/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

console.log(students[1], '\n', students[6][2]);
console.log(`Hello ${students[1]}!`, '\n', `Hello ${students[6][2]}!`);

//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for(foodItem of food){
    console.log(foodItem);
}

// Add to our array
food.push('Pizza'); // Appends Pizza to the end of our array
console.log('push: ', food);

//  Remove and insert
food.splice(1, 1, 'Bananas'); // Removes Shrimp and add Banana => (position, how many to remove, what to add)
console.log('splice: ', food);

food.splice(2,0, 'Sweet Potato Pie');
console.log('splice 2: ',food);

// Remove from end
food.pop(); // pop removes the last item of an array
console.log('pop: ',food);

// Adds to the start
food.unshift('Popcorn', 'Steak'); //unshift adds one or more elements to the beginning of the array
console.log('unshift: ', food);

// Remove from start
food.shift(); // shift removes the first element in an array
console.log('shift: ', food);


// Splice but only add
food.splice(1, 0, 'Apple Pie'); // Since we pass 0 for how many items to delete we end up just adding "Apple Pie" to the index at pos 1 while removing nothing
console.log(food);

//? LENGTH

// We can use a method called length() that can tell us how many values are within our array

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

let bool = [true, true, false];
console.log(bool.toString());

//? ITERATING
/*
    forEach -
        - the forEach() method executes a provided once for each element in an array - much like a for loop or a for of loop.

        - runs three arguments:
            1. The Value
            2. The Index
            3. the array object itself
*/

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

// for(let i = 0; i < foodList.length; i++){
//     console.log(i, foodList[i]);
// }

// We invoke callback function for each element within our array.
foodList.forEach(foodItem => console.log(foodItem));

// A callback function is another function we invoke within our main funnction
function print(callback){
    callback();
}

foodList.forEach((foodItem, index) => {
    console.log(index, foodItem);
    // console.log(index);
});
// - the second position of the parameter is ALWAYS the index

/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['Star Wars: Revenge of the Sith', 'Blade Runner', 'The Martian'];
console.log('Before Removal:');

movies.forEach(movie => console.log(movie));

// Add the movie 'Alien' to the end of the array
movies.push('Alien');

// remove index[0] ('Star Wars: Revenge of the Sith') and replace index[0] with 'Star Wars: A New Hope'
movies.splice(0, 1, 'Star Wars: A New Hope');

console.log('After Removal:');
movies.forEach(movie => console.log(movie));

