console.log("Day One Coding");


console.log('Learn Global & Local Scope & letiable');

//Gloabl Variable 
var name = "Muhammad Hamza Farooq";

//Funciton Defination 
function Greet(){
    let name = "Ali" //local letiable 
    console.log(name);
}



//function Calling 
Greet();

console.log(name)

// block Scope
{
    // Block Scope Local Variable 
    var student = "Mavia"; // var keyword is a global scope 
    
    let student1 = "Ziyad";  // but let keyword is a not global scope. let is a block scope
}

console.log(student);

console.log(student1);



