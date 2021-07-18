console.log("Learn Array method for includes");

// Includes Method for Array 

/*
Definition and Usage
The includes() method returns true if an array contains a specified element, otherwise false.
*/


/*
Syntax
array.includes(element, start)
*/

let string = "JavaScript";

function checkVowlAndConsunant(s) {
    // let vowel = ['a', 'e', 'i', 'o', 'u'];


    // for (let i = 0; i < s.length; i++) {

    //     if (vowel.includes(s[i])) {
    //         //   console.log("Vowel :  "+s[i]+' index is '+i);
    //         console.log(s[i]);
    //     }
    //     else if(!vowel.includes(s[i])){
    //         console.log(s[i])
    //     }
    //     // console.log(!vowel.includes(s[i])+" "+i)
        
    // }

    
 
        const vowels = 'aeiou';
        var consonants = '';
        
        for(var i = 0; i < s.length; i++) {
           if (vowels.includes(s[i])) {
               console.log(s[i]);
           }
           else {
             //  consonants += s[i] + '\n';/
               consonants =consonants+ s[i] + '\n';
              
            
           }
        }
        
        console.log(consonants.trim());
    

}

    //Function Calling 
    checkVowlAndConsunant(string);

//Example : 02 

/*

String.prototype.includes()
The includes() method performs a case-sensitive search to determine
whether one string may be found within another string, returning true or false as appropriate.

Syntax:
includes(searchString)
includes(searchString, position)

Parameters:
searchString
A string to be searched for within str.

position Optional
The position within the string at which to begin searching for searchString. (Defaults to 0.)

Return value
true if the search string is found anywhere within the given string; otherwise, false if not.

Description:
This method lets you determine whether or not a string includes another string.

Case-sensitivity
The includes() method is case sensitive. For example, the following expression returns false:


*/



/*
fromIndex Optional
The position in this array at which to begin searching for searchElement.

The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).

Defaults to 0.

Return value
A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.


Examples
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
Copy to Clipboard
fromIndex is greater than or equal to the array length
If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false
Copy to Clipboard
Computed index is less than 0
If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less or equal than -1 * arr.length, the entire array will be searched.

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

let arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false
Copy to Clipboard
includes() used as a generic method
includes() method is intentionally generic. It does not require this value to be an Array object, so it can be applied to other kinds of objects (e.g. array-like objects).

The example below illustrates includes() method called on the function's arguments object.

(function() {
  console.log(Array.prototype.includes.call(arguments, 'a'))  // true
  console.log(Array.prototype.includes.call(arguments, 'd'))  // false
})('a','b','c') 

*/


let string = "I am MERN Stack Developer !";
let word = 'MERN';

