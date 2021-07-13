console.log("Learn JavaScript Most Import Array Functions");

//There Are two type of JavaScript Data Type 
// 1- primitive Data Type
// 2- reference Data Type


//Array is reference data type
// There are two way to declear and initialize the array 

// JavaScript Array Methods


// Method 1 
const array = [1, 2, 4, 56, 79, 7];

// 1. map( )
// This method creates a new array with the results of calling a provided function on every element in this array.
// Syntax 
//array.map(function(currentValue, index, arr), thisValue)

const map = array.map((value, index) => {
    console.log(`value is ${value} & index is ${index}`);
});


const myObj = {
    Car: ['Honda', 'City', 'Civic', 'Toyota', 'Alto', 'Cultus']
};

const map1 = myObj.Car.map((car, carIndex) => {
    console.log(`Car is ${car} And CarIndex is ${carIndex}`);
});

const ObjInObj = {
    Student: [
        {
            id: 1,
            name: "Ali",
            age: 22,
            city: 'Karachi'
        },
        {
            id: 2,
            name: "ziyad",
            age: 22,
            city: 'Lahore'
        },
        {
            id: 3,
            name: "Hamza",
            age: 21,
            city: 'Islamabad'
        },
        {
            id: 4,
            name: "Hammad",
            age: 25,
            city: 'Quetta'
        },
    ]
};

const map2 = ObjInObj.Student.map((value, key) => {
    console.log(`student { id : ${value.id} , name : ${value.name} , age : ${value.age} , city : ${value.city}} & Index is ${key}`);
});

let users = [
    {firstname: 'Muhammad Hamza ', lastname: 'Farooq'},
    {firstname: 'Mirza Ziyad', lastname: 'beg'},
    {firstname: 'Muhammad Hammad ', lastname: 'Waheed'},
    {firstname: 'Fasal ', lastname: 'Jaweed'},
];

let usersFullNames = users.map((value,index)=>{
   return `${value.firstname} ${value.lastname}`;
})

console.log(usersFullNames);



//Syntax of Map() function 

/*
var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg])
*/
