import logo from './logo.svg';
import './App.css';

class Employ {
  constructor(name, salary, birthday, address) {
    this._name = name;
    this._salary = salary;
    this._birthday = new Date(birthday);
    this._address = address;
  }

  // Getter Methods
  get empName() {
    return this._name;
  }
  get empSalary() {
    return this._salary;
  }
  get empBirthday() {
    return this._birthday;
  }
  get empAddress() {
    return this._address;
  }
  get empAge() {
    return this._age;
  }

  // Setter Methods
  set empName(upName) {
    this._name = upName;
  }
  set empSalary(upSalary) {
    this._salary = upSalary;
  }
  set empBirthday(upBirthday) {
    this._birthday = new Date(upBirthday);
  }
  set empAddress(upAddress) {
    this._address = upAddress;
  }
  set empAge(upAge) {
    this._age = upAge;
  }

}

function App() {
  let currY = new Date().getFullYear();
  const empArr = [
    new Employ('James', 40000, 'December 25, 1995', 'Lucknow'),
    new Employ('John', 82000, 'March 13, 1999', 'Mumbai'),
    new Employ('Karl', 44000, 'June 1, 1995', 'Delhi'),
    new Employ('Rose', 76000, 'April 1, 1969', 'Surat'),
    new Employ('Joye', 23000, 'May 17, 1995', 'Ahmedabad'),
    new Employ('Chandler', 65000, 'September 13, 1969', 'Mumbai'),
    new Employ('Rachel', 76000, 'November 13, 1983', 'Surat'),
    new Employ('Pheobe', 54000, 'September 7, 1971', 'Mumbai'),
    new Employ('Monica', 23000, 'January 12, 1960', 'Lucknow'),
    new Employ('Mike', 76000, 'September 26, 1997', 'Mumbai'),
    new Employ('Richard', 78000, 'December 13, 1958', 'Delhi'),
    new Employ('Light', 33000, 'August 22, 2001', 'Ahmedabad'),
    new Employ('Reuky', 54000, 'September 11, 1990', 'Delhi'),
    new Employ('Jennifer', 98000, 'August 25, 1978', 'Mumbai'),
    new Employ('Patricia', 58000, 'December 25, 1976', 'Surat'),
  ]
  //console.table(empArr);

  // const empList_age = addAge(empArr)
  // console.table(empList_age)

  empArr.map(item=>{
    let empBY = item.empBirthday.getFullYear();
    item.empAge = currY - empBY;
    return 0;
  })

  console.table(empArr);

  const totalSalary = totalSalaryAgeGT30(empArr);
  //console.log(`Total Salary amount Company need to pay to Employees whose age is Greater than 30 is : ${totalSalary}`);

  const sortedEmpList = sortEmpListByAge(empArr);
  //console.table(sortedEmpList);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Practice Higher Order Functions of ES6 of Array<br></br>Output is on Console
      </header>
    </div>
  );
}

// function addAge(list) {
//   let currY = new Date().getFullYear();
//   list.map(item=>{
//     let empBY = item.empBirthday.getFullYear();
//     item.age = currY - empBY;
//     return 0;
//   })
//   return list;
// }

function totalSalaryAgeGT30(list) {
  let initialVal = 0;
  const totalSalary = list.filter(item => {
    return item.empAge > 30;
  }).reduce((total, item) => {
    return Number.parseInt(item.empSalary) + total;
  }, initialVal)

  return totalSalary;
}

function sortEmpListByAge(list) {
  const sortedArr = list.sort((a, b) => {
    return a.empAge - b.empAge;
  })

  return sortedArr;
}

export default App;