let user = {name : "Muhammad Hamza Farooq" , email : "mhamza2021999@gmail.com", passowrd : "12345" , reEnterPassword : "12345"}

let myOj = {
    ...user,
}

// console.log("Obj "+ myOj.name);

Object.keys(myOj).map((myKeys)=>{
    console.log(myKeys)
})

Object.values(myOj).map((myValues)=>{
    console.log(myValues)
})

let arr = [{...user}]
for (const iterator of arr ) {
    console.log(iterator)
}

for (const key in arr) {
   console.log(key)
}

arr.forEach(element => {
    console.log(element)
});

