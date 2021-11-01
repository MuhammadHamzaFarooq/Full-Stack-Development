/*
splice()
The splice() method can add or remove an item from any position in an array. 
A mutator method, splice() can either add or remove, or add and remove simultaneously.

splice() takes three parameters — the index number to start at,
the number of items to remove, and items to add (optional).

splice(index number, number of items to remove, items to add)
splice(0, 0, "new") would add the string "new" to the beginning of an array,
and delete nothing.

Let’s look at a few examples below at how splice() can add and remove items in an array.
*/
console.log("Learn Splice Method . Basically Splice Method is use for add and removing element in array any postion ");

/* 
Removing with splice()
If we leave the third parameter (items to add) blank, 
we can simply remove an item from any point in the array.
*/

let food = ['barayni','pilao','tika','rost','pizza','karhai','kabab','qorma','sajji'];

food.splice(3,2,"mutan karhai",'Paye');

console.log(food);

