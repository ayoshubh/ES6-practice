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
}

function App() {
  let currY = new Date().getFullYear();
  const empArr = [
    new Employ('James', 40000, 'December 25, 1995', 'Lucknow'),
    new Employ('John', 82000, 'March 13, 1999', 'Mumbai'),
    new Employ('Karl', 44000, 'June 1, 1995', 'Delhi'),
    new Employ('Rose', 76000, 'April 1, 1969', 'Surat'),
    new Employ('Joey', 23000, 'May 17, 1995', 'Ahmadabad'),
    new Employ('Chandler', 73000, 'September 13, 1969', 'Mumbai'),
    new Employ('Rachel', 76000, 'November 13, 1983', 'Surat'),
    new Employ('Phoebe', 54000, 'September 7, 1971', 'Mumbai'),
    new Employ('Monica', 23000, 'January 12, 1960', 'Lucknow'),
    new Employ('Mike', 76000, 'September 26, 1997', 'Mumbai'),
    new Employ('Richard', 78000, 'December 13, 1958', 'Delhi'),
    new Employ('Light', 33000, 'August 22, 2001', 'Ahmadabad'),
    new Employ('Recks', 54000, 'September 11, 1990', 'Delhi'),
    new Employ('Jennifer', 98000, 'August 25, 1978', 'Mumbai'),
    new Employ('Patricia', 58000, 'December 25, 1976', 'Surat'),
  ]
  //console.table(empArr);

  const empList_age = addAge(empArr)
  // console.table(empList_age);
  // console.table(empArr);

  let dataFromAPIPro = [],dataFromAPIAsync = [];
  let merDataPro = [] ,merDataAsync = [];

  const apiPromise = new Promise((res, rej) => {
    let x = false;
    let data;
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => {
        x = true;
        data = json.slice(0, 20);
        return x;
      }).then((y) => {
        if (y) {
          res(data)
        } else {
          rej('Some Error!!!')
        }
      })
  })

  apiPromise.then((data) => {
    dataFromAPIPro = data;
    merDataPro = [...dataFromAPIPro, ...empList_age]
  }).catch((error) => {
    console.log(error);
  })

  async function apiAsync() {
    const data = await fetch('https://api.github.com/users').then(res => res.json());
    dataFromAPIAsync = data.slice(0, 20);
    merDataAsync = [...dataFromAPIAsync, ...empList_age]
    console.log(merDataAsync);
  }


  setTimeout(() => {
    console.log(merDataPro);
    apiAsync();
  }, 500)


  const totalSalary = totalSalaryAgeGT30(empList_age);
  console.log(`Total Salary amount for Company for Employee whose age is Greater than 30 is ${totalSalary}`);

  const sortedEmpList = sortEmpListByAge(empList_age);
  console.table(sortedEmpList);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Practice Higher Order Functions of ES6 of Array<br></br>Output is on Console
      </header>
    </div>
  );
}


function addAge(list) {
  let currY = new Date().getFullYear();
  const arrwithAge = list.map(item => {
    let empBY = item.empBirthday.getFullYear();
    let ageObj = { _age: currY - empBY }
    return Object.assign({}, item, ageObj);
  })
  return arrwithAge;
}



function totalSalaryAgeGT30(list) {
  let initialVal = 0;
  const totalSalary = list.filter(item => {
    return item._age > 30;
  }).reduce((total, item) => {
    return Number.parseInt(item._salary) + total;
  }, initialVal)

  return totalSalary;
}

function sortEmpListByAge(list) {
  const sortedArr = list.sort((a, b) => {
    return a._age - b._age;
  })

  return sortedArr;
}

export default App;