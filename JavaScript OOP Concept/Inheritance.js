console.log("Learn Inheritance");


class Employee{
    constructor(name,age,city,salary){
        this.name = name;
        this.age = age;
        this.city = city;
        this.salary = salary;
    }    
    Greet(){
        console.log("Welcome In Full Stack Development");
    }

    empBioDate(){
        console.log(`Employee name is ${this.name} & age is ${this.age} & city is ${this.city} & salary is ${this.salary}`)
    }

    static staticMethod(){
        console.log('static function');
    }
}


class Manager extends Employee{
     managerInfo(){
        console.log(`Manager name is ${this.name} & age is ${this.age} & city is ${this.city} & salary is ${this.salary}`)
     }
}

class Developer extends Manager{
    developer(){
        console.log(`Developer name is ${this.name} & age is ${this.age} & city is ${this.city} & salary is ${this.salary}`)      
        super.Greet();
        super.managerInfo();
        super.empBioDate();
    }

    
}


// let emp = new Employee("Maiva Ali",22,'Lahore',39949);
// let manger = new Manager("Muhammad Hamza Farooq",22,'Karachi',399999);
let dev = new Developer("Mirza Ziyad Ahmed Beg",23,'Islamabad',400000);


// dev.Greet();
dev.developer();

// manger.empBioDate();
// emp.empBioDate();



