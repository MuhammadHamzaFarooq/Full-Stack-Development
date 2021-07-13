console.log("Learn Filter() method in javaScript");


/*
Filter
The filter() method takes each element in an array and it applies a conditional statement against it.
If this conditional returns true, the element gets pushed to the output array. If the condition returns false,
the element does not get pushed to the output array.
*/

//Syntax of filter() Method

/*
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])

The syntax for filter is similar to map, except the callback function should return true to keep the element, 
or false otherwise. In the callback, only the element is required.

*/


//Example for Even number filter

let numberArr = [1, 20, 39, 4, 50, 87, 34, 22, 27, 24, 54, 08, 80];
let evenNumber = numberArr.filter((element) => {
    return (element % 2 === 0)
});

console.log(evenNumber); // final output is even nubmer array

let students = [
    {name:'sufyan',grade:94},
    {name:'Ziyad',grade:84},
    {name:'Mavia',grade:74},
    {name:'Aniq',grade:64},
];

let studentGrades = students.filter((student)=>{
    return student.grade >= 90 ;    
});

console.log(studentGrades);

