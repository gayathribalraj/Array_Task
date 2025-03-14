// const arr = [23,45,67,89,43,12]

// console.log(arr.splice(2,2))
// console.log(arr)
let person = [] ; 

for(let i = 1 ; i<=50 ; i++)
    {
        person.push("person"+i)
    }
    // console.log(person)
    
   let person1 = person.map((person,index)=>
   (
       {
           id : index+1  ,
           EmployeeName : person
       }
       ));
    
    person = person1
    console.log(person)
       
    
    
    
//  let mappedArray = person.map((person,index) =>
//      ( {
    
//     id : index +1 ,
//     EmployeeName :  person
// }));
//   console.log(mappedArray)
   
   
//   let person1 = [...mappedArray]
//   console.log(person1)

   
   
   

// let person1 = mappedArray.map( maped =>mappedArray.person);
// console.log(person1)





// let person1 = mappedArray.map((index , EmployeeName) =>


// console.log(person1)


// const empArray = mappedArray.filter(employee=>!(employee.id >30 && employee.id < 38 ))
//  console.log(empArray);
