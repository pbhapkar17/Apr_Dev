// JSON stands for JavaScript Object Notation
// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.
// JSON is a lightweight data interchange format
//e.g.
// {
//     "employees": [
//         { "firstName": "John", "lastName": "Doe" },
//         { "firstName": "Anna", "lastName": "Smith" },
//         { "firstName": "Peter", "lastName": "Jones" }
//     ]
// }

let emp = {
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}

console.log(emp);
console.log(emp.employees);
console.log(emp.employees[0].firstName);

let emp1 =  {
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ],
    "address":"A-903, mumbai",
    "mob":6597797979,
    "hobbies":['cricket','painting']
}

console.log(emp1.address);


let studentData =
{
    studentName: "poonam",
    studentFriends: ['om', 'Sai', 'Nitish'],
    mob: 985898999,
    address: [
        {
            colony: "NgCanary",
            Landmark: "Miraroad",
            city: "mumbai"
        }
    ],
    marks: [200, 30, [90, 6666, [10, [20, 666]]]],
    test: [
        {
            FruitName: 'Mango'
        },
        {
            FruitName: 'Berry'
        }
    ]
}

console.log(studentData);
console.log(studentData.studentName);
console.log(studentData.studentFriends[2]);
console.log(studentData.mob);
console.log(studentData.address[0].city);
console.log(studentData.marks);
console.log(studentData.marks[2][2][0]);
console.log(studentData.marks[2][2][1][0]);
console.log(studentData.test);
console.log(studentData.test[1].FruitName);

//JSONStringyfy():when data needs to send to the backend 
//it would get sent in jsonstringyfy format
console.log(studentData);
let stringyFiedData = JSON.stringify(studentData);
console.log(stringyFiedData);
let parsedDate = JSON.parse(stringyFiedData);
console.log(parsedDate);