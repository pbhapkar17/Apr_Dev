//length property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//toString(): converts an array to a string of (comma separated) array values.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruits2 = fruits1.toString();
console.log(fruits2);

let num = [20,55,33,55,1212,455];
let num2 = num.toString();
console.log(num2);

//The join() method also joins all array elements into a string.

let num3= [20,55,33,55,1212,455];
let num4 = num3.join(' * ');
console.log(num4);

//The pop() method removes the last element from an array and pop will return the removed element:
let num5 = [20,55,33,55,1212,455];
let num6 = num5.pop();
console.log(num5);
console.log(num6);

//push()The push() method adds a new element to an array (at the end) ,push returns the new array length
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
//fruits4.push('Orange');
let fruits5 = fruits4.push('Orange', 'strawberry');
console.log(fruits4);
console.log(fruits5);
