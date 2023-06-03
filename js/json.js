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