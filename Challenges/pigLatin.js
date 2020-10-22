/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

function pigLatin(str) {
    // regexpr matching vowels in word '/i' to ignore casing
    let vowel = str.match(/[aeiouy]/i);
    // first position where vowel starts
    let firstPos = str.indexOf(vowel);

    if (firstPos > 0) { //if first vowel index is greater than index 0
        //slice letters before vowel || arrange letters behind word || append 'ay' to end
        return str.slice(firstPos) + str.slice(0, firstPos) + 'ay';
    } else {
        // else append 'ay' to end of word
        return str + 'ay'
    }

}

console.log(pigLatin('good'))