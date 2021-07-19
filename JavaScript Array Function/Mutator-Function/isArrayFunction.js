console.log("Learn mutator methods isArray");

/*
Before we get into mutator methods, 
let’s look at the isArray() method to test whether objects are arrays.
This is a Boolean method that returns true if the value of a variable is equal to an array.
If the object is not an array, this method returns false.
*/

let student = ["Muhammad Hamza Farooq","Mirza ziyad ahmed beg","Mavia Ali","Muhammad Hammad Waheed","Fasal Jaweed"];

// Test if student variable is an Array
console.log(Array.isArray(student));

/*
The isArray() method is useful because the typeof operator 
we would normally use for testing returns object when used with arrays,
and sometimes knowing the distinction between an object and an Array object is necessary.

Note that isArray() is written differently from most array methods, 
with the array variable being provided as an argument to the method.
*/
