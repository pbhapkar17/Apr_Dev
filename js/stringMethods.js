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
console.log(text3.slice(-6));
console.log(text3.slice(7,12));

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
let para = 'jdw dhiwhd ldjipwq';
console.log(para.substring(-2,7));

//substr(start index,length) is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let para2 = 'hdf fiqhf kfhiwqhfpi .sncfie';
console.log(para2.substr(5,10));

//replace()
//The replace() method replaces only the first match
//If you want to replace all matches, use a regular expression
// with the /g flag set. See examples below.
let para5 = 'pune i like pune';
let para6 = para5.replace("pune","5000");
console.log(para6);

let para7 = "pune i like pune";
//let para8 = para5.replace(/Pune/i,"mumbai");
let para8 = para5.replace(/pune/g,"mumbai");
//let para8 = para5.replace(/Pune/ig,"mumbai");
console.log(para8);

//replaceAll()replces all values
let text7 = 'skx pune og pune pune llll pune pune';
let text8 = text7.replaceAll('pune','mumbai');
console.log(text8);

//toUpperCase()
let test5 = 'Poonam likes jaguar hhhHHHHHH JJJJJJ KKKK';
let convertedValue = test5.toUpperCase();
console.log(convertedValue);
//toLowerCase();
let convertedValue2 = test5.toLowerCase();
console.log(convertedValue2);

//concate():(string,array)
let test7 = 'helloooo';
let test8 = 'India';
let res = test7 + " " + test8;
console.log(res);

let res2 = test7.concat(" ", test8)
console.log(res2);

let res3 = test8.concat(" ", test7, " ", "Maharashtra");
console.log(res3);

//The trim() method removes whitespace from both sides of a string
let myName = '    poonam    ';
console.log(myName);
console.log(myName.trim());
console.log(myName.trimStart());
console.log(myName.trimEnd());

//The charAt() method returns the character at a specified index (position) in a string:
let myLastName = 'Patil';
console.log(myLastName.charAt(0));

//String split() a string can be converted to an array with the split() method
let date = "10-4-1992";
let dateNew = date.split('-')
console.log(dateNew);
console.log(dateNew[2]);

let name = 'poonam patil';
let updatedName = name.split(' ');
console.log(updatedName);
console.log(updatedName[0]);
console.log(updatedName[1]);






