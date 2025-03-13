
// Create array

let person = [] ;

for(let i = 1 ; i<=50 ; i++)
    {
        person.push("person"+i)
    }
    console.log(person)



    // Create Employee array from person array 

// let employees = [] ;

// let employee = person.map((index,employees) => {
    
//     let id = index ;
//     let employeeName = employees ;
// })

// console.log(employees);

let employee = person.map((person,index) =>
    ( {
    
    id : index +1 ,
    EmployeeName :  person
}));

console.log(employee);

