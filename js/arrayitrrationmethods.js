// spread operator: ...
// The JavaScript spread operator (...) allows us to quickly
//  copy all or part of an existing array or object into another array or object.

let colors = ['red','blue','yellow','pink'];
let copyOfColors7 = [];
for (let index = 0; index < colors.length; index++) {
    copyOfColors7.push(colors[index])   
}
console.log(copyOfColors7);

let copyUsingSpread = [...colors]; //all item
console.log(copyUsingSpread);

let obj = {
    name:'poonam',
    age:30
}

let obj2 = {...obj};
console.log(obj2);

let no1 = [10,20,30,80];
let no2 = [60,98,656,66];

let res = [...no1, ...no2];
console.log(res);

let obj3 = {
    name:'pooja',
    age:40,
    mob:899966336
};
let obj4 = {
    name:'om',
    age:50,
   
};

let obj5 = {...obj3 , ...obj4}; 
console.log(obj5); //for common keys it will take last object's values hence
// original values getting affected hence avoid to use spread operator  on objects.

let num = [60,90,66,54,966];
let [firstItem, secondItem,  ...restItem] = num;
console.log(firstItem);
console.log(restItem);
let [xyz, ...remaining] = num
console.log(xyz);
console.log(remaining);


let colors3 = ['red','blue','yellow','pink','Indigo','white'];
let copyOfColors3 = [];
for (let index = 0; index < colors3.length; index++) {
    if(colors3[index]=='yellow'){
       break;
    }
    copyOfColors3.push(colors3[index])   
}
console.log(copyOfColors3);

// colors3.forEach(item=>{
//     copyOfColors3.push(item);
// })
// console.log(copyOfColors3);


let student = [
    {
        name: 'om',
        age: 20
    }, {
        name: 'Radha',
        age: 19
    }, {
        name: 'Ram',
        age: 20
    }
]
//['om]

let studentsName = student.map(item=>{
   return item.name;
});

console.log(studentsName);

let num4 = [50,10,2,7,3,6,9,4,8,60,7,50,500];
 let num5=  num4.filter(item =>{
  return  item < 10;
})
console.log(num5);
// let num5=[]
//   num4.map(item =>{
//   if(item < 10){
//    num5.push(item);
//   }
// })
let num6 = [50,10,2,7,3,6,9,4,8,60,7,50,500];
num6.forEach((item,i)=>{
    console.log( i , item);
})

let duplicateArray = [20,10,30,20,50,10,30,90,60,30];
//1st way uing Set()
let uniqueChars = [...new Set(duplicateArray)];
console.log(uniqueChars);

//2nd way
let newAray = duplicateArray.filter((item,i)=>{
   return duplicateArray.indexOf(item) === i;
})
console.log(newAray);

//arrow method/function
let result = function test(a,b){
 return a +b ;
}
//console.log(test(20,90));

//(a,b) => a + b;


//for of loop
const cars = ["BMW", "Volvo", "Mini"];
let carsNew=[];
for(let x of cars){
    carsNew.push(x)
}
console.log(carsNew);

let data = {
    name: 'Raj',
    age: 50,
    city: 'mumbai'
}
for(let x in data){
    console.log(x);
    console.log(data[x])
}

const numbers = [45, 4,4,5, 9, 16,5, 25];
let newArr = numbers.reduce((prviousArrayItems,curValue)=>{
    if(!prviousArrayItems.includes(curValue)){
        prviousArrayItems.push(curValue);
    }
    return prviousArrayItems
  },[])
 
console.log(newArr);


let cars2 = ["BMW", "Volvo", "Mini"];
//[{name:pooname,age:30},{name:pooname,age:30},{name:pooname,age:30}]
//*ngFor = "let varName of arrayName"
//{{variName.name}}
//*ngFor = 'let item of cars2'
//{{item}}
//let response = {
//   success:[
//     statusCode:'2001ssdfdfe',
//     successMassage : 'Data saved successfully'
//  ]
//}
// if(Response.statusCode.startsWith('200')){

// }
// else{

// }

let no =  [45, 4,4,5, 9, 16,5, 25];
let no5 = [...new Set(no)];
console.log(no5);

//common items
let num3 = [45, 4, 4, 5, 9, 16, 5, 25];
let num7 = [10, 4, 4, 5, 9, 1, 5, 33];
// let num8 = [... new Set(num3)]
// console.log(num8);
let con = [...num3 , ...num7]
let num9 = [...new Set(con) ]
console.log(num9);
// let commonItem = [];
// num8.forEach(item=>{
//     num9.forEach(innerItem=>{
//       if(item === innerItem){
//       //  if(!commonItem.includes(item)){
//             commonItem.push(item);
//        // }
       
//       }  
//     })
// })
// console.log(commonItem);
// console.log([... new Set(commonItem)]);

let a = [10,20,20,30,[40,60,40,60]]; //[10,20,30,[40,60]] //[10,20,30,40,60]
//let b = [20,10,6,0,3];
let c = [];
let d =[];
a.forEach(everyItem=>{
    if(Array.isArray(everyItem)){
     // everyItem.forEach(item=>{
        // if(!d.includes(item)){
        //     d.push(item)
        // }
     // })
     d = [...new Set(everyItem)]
    }
    if(!Array.isArray(everyItem)){
    if(!c.includes(everyItem)){
        c.push(everyItem)
    }
}
})
c.push(d)
console.log(c);
