console.log("Learn JavaScript Call Back Function");

//In JavaScript Callback functions are use to ways 

// 1- Synchronous
// 2- Asynchronous

// Descriptions : 

/*
Summary: in this tutorial, you will learn about JavaScript callback functions including synchronous and asynchronous callbacks.

What are callbacks
In JavaScript, a callback is a function passed into another function as an argument to be executed later.

Suppose that you the following numbers array:

let numbers = [1, 2, 4, 7, 3, 5, 6];
Code language: JavaScript (javascript)
To find all the odd numbers in the array, you can use the filter() method of the Array object.

The filter() method creates a new array with the elements that pass the test implemented by a function.

The following test function returns true if a number is an odd number:

function isOddNumber(number) {
    return number % 2;
}
Code language: JavaScript (javascript)
Now, you can pass the isOddNumber() to the filter() method:

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]
Code language: JavaScript (javascript)
In this example, the isOddNumber is a callback function. When you pass a callback function into another function, you just pass the reference of the function i.e., the function name without the parentheses ().

To make it shorter, you can use an anonymous function as a callback:

let oddNumbers = numbers.filter(function(number) {
    return number % 2;
});
console.log(oddNumbers); // [ 1, 7, 3, 5 ]
Code language: JavaScript (javascript)
In ES6, you can use the arrow functions:

let oddNumbers = numbers.filter(number => number % 2);
Code language: JavaScript (javascript)
When you use the JavaScript on web browsers, you often listen to an event e.g., a button click and carry some actions if the event occurs.

*/

//Exmaple 
function greeting(name){
    console.log('Hello ' + name);
}

function processUser(callback) //this function take as a parameter in the form of call back function 
{
    let name = "Muhammad Hamza Farooq";
    callback(name);
    //In this example, the greeting is a callback function. When you pass a callback function into another function, you just pass the reference of the function i.e., the function name without the parentheses ().

}

processUser(greeting);