
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


// let removeEmployees = employee.slice(0,30);


// let employees = employee.filter(employee =>(employee.id > 30 && employee.id < 38 )))

// console.log(removeEmployees);
// console.log(employees);






// console.log(removeEmployees)

// let filtEm = (employee.id >30 && employee.id < 38)



// for(let i= 0 ; i<=employee ;i++)
//     {


//     if(filtEm)
//     {
//         console.log(removeEmployees)
        

//     }
//     else{
//         console.log(filterEmployees[i])

//     }

 
//     }



// let removeEmployees = employee.splice(30,7);

// console.log(removeEmployees);
//  let filterEmployees = [];


// for(let i = 0 ; i<=employee; i++)
//     {
//       console.log(i)
      
//     }

//     let select = i===removeEmployees ;
//     if(i===removeEmployees){
//         filterEmployees[i]
//     }
//     console.log(i);

//using splice Method 
employee.splice(30,7);
console.log(employee,"test")


//using Filter Method
let employees = employee.filter(employee=>!(employee.id >30 && employee.id < 38 ))
console.log(employees);


