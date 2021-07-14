console.log("Learn OOP In javaScript");

//Class 
//There Are two type of thing in Classes one is properties and second is methods

// In Classes There are three types of methods 

/*
1- Constructor();
2- Prototype();
3- Static();
*/

// set Properites method One
class Student{
     constructor(){
      let name ; 
      let fname;
     }
     greet(){
         console.log(`My name is ${this.name} & my Father name is ${this.fname}`);
     }
     
} 

let obj = new Student();

//set Properites 
obj.name = "Muhammad Hamza Farooq";
obj.fname = "Farooq Ali";

//calling Methods
obj.greet();


class Employee{
    constructor(name,age,city,salary){
        this.name = name;
        this.age = age;
        this.city = city;
        this.salary = salary;
    }    
    developer(){
        console.log(`name: ${this.name} , age : ${this.age} , city: ${this.city} , salary : ${this.salary}`);
    }

    static staticMethod(){
        console.log('static function');
    }
}

let emp = new Employee('Miza Ziyad Ahmed Beg',20,'Karachi',34000);
emp.developer();

// Calling Static Methods With out creating a object 
Employee.staticMethod();




