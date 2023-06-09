
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
