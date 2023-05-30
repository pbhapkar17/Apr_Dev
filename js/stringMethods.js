//length property(string, array)
let text = 'jgdjb djboj bdobou pooonam';
console.log(text.length);

//slice(start index,end index) //start index exclusive and end index will be inclusive

let text2 = 'Poonam lives in Mumbai';
console.log(text2.slice(16,22));
let city = text2.slice(16,22)

let text3 ='i like-mango';
//slice(-start index,-end index) //start undex in negative para value will 
//be includive and end index is exclusive
console.log(text3.slice(-6,-1));
console.log(text3.slice(7,12));

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
let para = 'jdw dhiwhd ldjipwq';
console.log(para.substring(-2,7));

//substr(start index,length) is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let para2 = 'hdf fiqhf kfhiwqhfpi .sncfie';
console.log(para2.substr(5,10));