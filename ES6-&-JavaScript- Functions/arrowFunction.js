console.log('Learn arrow function in javaScript');

//simple function in old javaScript 
function greeting(name){
    return  "Hello " + name
}

//calling function 
greeting();

let hello = function (){
    return "hello Word"
}

console.log(hello());

// In latest javaScript ES6  Arrow function 

// multi-line and more parameter arrow function syntax
let student = (name,age)=>{
  return name+" "+age;
}
console.log(student("Mira ziyad Ahmed Beg",22));

// One linear arrow function  code syntax 
let teacher = name => 'Zia Khan'; //   let teacther = (paramerter) => return statement
console.log(teacher());

//Multi-parameter but one liner syntax
let developer = (name,age,city) => `name : ${name} age: ${age} city : ${city}`;
console.log(developer("Muhammad Hamza Farooq",21,"karachi"));
