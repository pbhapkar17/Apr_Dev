
//if  block 
//if(condition){
    //code block
//}

//if else condition
//if(condition){
 //code block
//}
// else{

// }

//else if condition
//if(condition){
 //code block
//}
// else if{

// }
//else if(){

// }
// else{

// }

// switch(value){
//     case: 
//     default;
// }

let marks = 70; 

if(marks > 35){
 console.log('passed');
}

if(marks > 35){
    console.log('passed');
}
else{
    console.log('failed');
}

let s = 60;
if(s > 35){
    console.log('passed');
}
else{
    console.log('failed');
}

//ternory operator statement/condition ? True : False;
    s < 35 ? console.log('passed..') : console.log('failed..');

//else if
if(marks > 60 && marks < 70){
    console.log('achived first class');
}
else if(marks >70 && marks <80){
    console.log('achieved distinction');
}
else if(marks > 80){
    console.log('great achivement');
}
else{
    console.log('average achievment');
}


switch (marks) {
    case 70:
        console.log('good achivement');
       break;
    case 80:
        console.log('great achivement');
        break;
    default:
        console.log('average achievement')
        break;
}
// break;
let cars = ['volvo','Swift','i10','i20','mini cup','marcedeez'];
let carsNew = [];
for (let index = 0; index < cars.length; index++) {
    if(cars[index] == 'i20'){
      break;
    }
    carsNew.push(cars[index]);
}
console.log(carsNew);

//continue 
let cars1 = ['volvo','Swift','i10','i20','mini cup','marcedeez'];
let car2 = [];

for (let index = 0; index < cars1.length; index++) {
    if(cars1[index] == 'i20' ){
      continue;
    }
    car2.push(cars1[index]);
}
console.log( car2);


