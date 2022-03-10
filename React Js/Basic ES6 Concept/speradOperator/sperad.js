console.log("Sperad Operator");

let simpleArray = ["hamza","Ali","Rafan","Salil","Irfan"];
let simpleArray1 = [...simpleArray];


simpleArray1.push("fuzail");
simpleArray1.push("jammil");
simpleArray.push("Inzamam");
console.log("simpleArray ",simpleArray)
console.log("simpleArray1 ",simpleArray1);

let obj={
    name : "Muhammad Hamza Farooq",
    email : "mhamza2021999@gmail.com",
    city:["karachi","Islamabad","Maler","Multan"],
    Courses :{
     IOT : "internet Of Things",
     MERN : "MERN Stack Developer"
    }
}

let obj1 = {...obj};


console.log("Obj" ,obj);
console.log("Obj One" ,obj1);