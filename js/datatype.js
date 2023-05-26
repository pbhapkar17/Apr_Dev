//JavaScript provides different data types to hold different types of values. 
//There are two types of data types in JavaScript.

// Primitive data type string.(single value holder)
// number.
// bigint.
// boolean.
// undefined.
// symbol.
// null.
// string
// Non-primitive (reference) data type(multi value holder)
//object

//number data type

var xyz = 300 ; //number data type
var no = 1.236 //number

//typeof() operator used get data type of variable

console.log('data type of xyz variable is>>', typeof(xyz)); //number

console.log(typeof(xyz + 20)); //number
console.log(typeof(xyz + 20 + 'poonam')); //string 
console.log(typeof(xyz + 20 + 'poonam' + 20)); //string 

//string DT
let firstName = "shree"; //string
console.log(typeof(firstName));

var address = "A - 901 , BG CANARY, MUMBAI";

let num2 = "200";
let res = num2 + 20;
console.log(res);

//boolean DT
//true false

let isIndiaBigCountry = true; //boolean
let isPakistanBigCountry = false;

console.log(typeof(isIndiaBigCountry));
//let isIndiaBigCountry = 'true';//string

//undefined dt
let myFavFruit;
//let myFavFruit = undefined
console.log(typeof(myFavFruit));

//null dt
let myCity = null;
console.log(typeof(myCity)); //object


//bigInit
let cash = 9999999999999999;
console.log(cash);
let bigIntVariable = BigInt('99999999999999999616');
console.log(bigIntVariable);


//symbol DT
let test = Symbol('poonam');
console.log(typeof(test));

//object DT

let color = ['red','pink','yellow'];//array with 3 values 
//:hoogeneous array: same data type's items
let color2 = [];//empty array
console.log(color);
console.log(color2);

let items = ['poonam',2020,'9865989899','ctgpp45659p' , test2(), true ];

console.log(items);


function test2(){
    return 'priya';
}
console.log(typeof(items));

console.log(typeof(color2));



//length property to know about length of array and string;

let cars = ['120','i10','swift','mini cup','marcdeez'];

console.log(cars.length);