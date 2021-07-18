console.log("Learn javaScript ES6 Rest Operator");

//In Old javaScript There are manay arrgument in function Use bllt- in funtion arguments

// example : 01
function sum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);

//calling funcion 
sum(20, 30) //valid 

//sum(39,49,88) // not valid because this not allowed more than two parameter

// Solution in old javaScript

function add() {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i];
    }

    console.log(sum)
}

// few paremter 
add(120, 30);
add(4095, 99, 38);
add(394, 5859, 399, 003, 004, 88, 03);

//Solution 2 in ES6 introduse rest operator
function addition(...args) {
    let sum = 0;
    for (let i in args) {
        sum = sum + args[i]
    }
}

addition(30, 49);
addition(84, 75, 30, 84, 58503, 448);
addition(38, 48, 58, 293, 484384, 494949, 393);
addition("hamza", 32, 8, 4); // Error because this correct syntax is addition(name,...args)

//solution 3
function addition1(name, ...args) {
    console.log(`hello : ${name}`);
    let sum = 0;
    for (let i in args) {
        sum = sum + args[i]
    }
    console.log(sum)
}

addition1("ali", 38, 38);
addition1("Hamza", 37, 949);
addition1("sufyan", 90, 98, 30, 49, 94);


// Incorrect syntax for delearing rest operator
// function add(...args,name){} //wrong because ... rest operator use in last as parameters

// function add(age,...args,name){} //wrong because ... rest operator use in last as parameters in this case rest operator is use in midle this is wrong 

// function add(...age,...args,name){} //wrong because ... rest operator use in last as parameters in this case rest operator is use in first &  midle this is wrong because rest operator is declear as paramter in one time not many parameters
