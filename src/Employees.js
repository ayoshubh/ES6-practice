import React from 'react'

const Employees = () => {

    const emp = [{ name: "Rahul", salary: 1000, bdate: new Date("05/26/2001"), address: "vadodara" },
    { name: "shyam", salary: 2000, bdate: new Date("08/20/1970"), address: "valsad" },
    { name: "mohit", salary: 3000, bdate: new Date("02/02/1960"), address: "surat" },
    { name: "hari", salary: 4000, bdate: new Date("02/04/1980"), address: "surat" },
    { name: "radhe", salary: 2000, bdate: new Date("11/14/1999"), address: "valsad" },
    { name: "kishan", salary: 5000, bdate: new Date("12/11/1998"), address: "vadodara" },
    { name: "kanha", salary: 500, bdate: new Date("11/19/2002"), address: "Gandhinagar" },
    { name: "kabir", salary: 1000, bdate: new Date("02/24/2004"), address: "Gandhinagar" },
    { name: "shubh", salary: 2000, bdate: new Date("01/16/1975"), address: "Jamnagar" },
    { name: "rana", salary: 2000, bdate: new Date("11/14/1996"), address: "valsad" },
    { name: "raj", salary: 5000, bdate: new Date("12/11/1966"), address: "vadodara" },
    { name: "ramesh", salary: 500, bdate: new Date("11/19/1982"), address: "Gandhinagar" },
    { name: "suresh", salary: 1000, bdate: new Date("02/24/1992"), address: "Gandhinagar" },
    { name: "karan", salary: 2000, bdate: new Date("01/16/1985"), address: "Jamnagar" },
    { name: "anupam", salary: 2000, bdate: new Date("01/16/2003"), address: "Jamnagar" }
    ]

    const x = new Date();
    let year = x.getYear();

    const newData = emp.filter((e) => {
        return year - e.bdate.getYear() >= 30
    }).reduce((totalSalary, e) => { return e.salary + totalSalary }, 0)
    console.log("total salary of employees above 30yrs of age is " + newData)


//     function sorting(empl){
//     const sortAge = empl.sort((a, b) => {
//         if (a.bdate > b.bdate) {
//             return 1
//         } else {
//             return -1
//         }
//     })
//     console.log(sortAge)

// }
// sorting(emp)
    // console.log(sortAge)

    // console.log(emp)

    

   

    // console.log(emp)
//   let AgeOfEmp = emp.map((e) => {
//         let a=year - e.bdate.getYear()
//         e.age = a

//         return e
//         // console.log(emp)

//     })

    // let AgeOfEmp = emp.map((a) => {

    //     a.age = year - a.bdate.getYear()

    //     return a
    //     // console.log(emp)

    // })

    // console.log(AgeOfEmp)

    const square = function(number){
        number.age = year - number.bdate.getYear()
        return number
    }
    
    const squareNumber = emp.map(square);

    console.log(squareNumber)


    //     function joke(){
    //   emp.forEach((age)=>{
    //     age.age = year - age.bdate.getYear()

    //   })
    //   return emp
    //   }
    //   const AgeOfEmp = emp.map(joke)

    //   console.log(AgeOfEmp)
    return (
        <div><h1>employees</h1>


        </div>
    )
}

export default Employees