//JavaScript provides different data types to hold different types of values. 
//There are two types of data types in JavaScript.

// Primitive data type string.(single value holder)
// number.
// bigint.
// boolean.
// undefined.
// symbol.
// null.
//string
// Non-primitive (reference) data type(multi value holder)
//object

//number data type

var xyz = 300; //number data type
var no = 1.236 //number

//typeof() operator used get data type of variable

console.log('data type of xyz variable is>>', typeof(xyz)); //number

console.log(typeof(xyz + 20)); //number
console.log(typeof(xyz + 20 + 'poonam')); //string 
console.log(typeof(xyz + 20 + 'poonam' + 20)); //string 

let firstName = "shree";
console.log(typeof(firstName));

var address = "A - 901 , BG CANARY, MUMBAI";