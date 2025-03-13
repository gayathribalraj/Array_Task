
// Create array

let person = [] ;

for(let i = 1 ; i<=50 ; i++)
    {
        person.push("person"+i)
    }
 console.log(person)


// // create Employee array 

let employee = person.map((person,index) =>
    ( {
    
    id : index +1 ,
    EmployeeName :  person
}));


console.log(employee);

// Remove all Employees whose employee ids are greaterthan 30 and lessthan 38 

//   //1. using Splice Method

// employee.splice(30,7);
// console.log(employee,"test")


// // //2. using Filter Method

 let employees = employee.filter(employee=>!(employee.id >30 && employee.id < 38 ))
 console.log(employees);

// // //printAll Employees whose ids are even Numbers 


let Evenemployee = employee.filter(employee => (employee.id %2 == 0 ))
console.log(Evenemployee)

// //Add a roll proparty and give the value 'intern' to the last 10 employees

for(let i=employee.length-1 ; i >= 40 && i <= 50 ; i--)
    {
         if(i >= 40 && i <= 50)
            {
          employee[i].Roll = "intern"
            console.log(employee[i])

       }

    }


