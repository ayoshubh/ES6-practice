import React from "react";

class App extends React.Component{
  constructor(Props){
    super(Props);
    this.state = {
      data: [ {name: "One", salary: 1000, bdate: 1981, address: "vadodara"},
        {name: "Two", salary: 2000, bdate: 1992, address: "valsad"},
        {name: "Three", salary: 3000, bdate: 1999, address: "surat"},
        {name: "Four", salary: 4000, bdate: 1989, address: "surat"},
        {name: "Five", salary: 2000, bdate: 2009, address: "valsad"},
        {name: "Six", salary: 5000, bdate: 1987, address: "vadodara"},
        {name: "Seven", salary: 500, bdate: 1986, address: "Gandhinagar"},
        {name: "Eight", salary: 1000, bdate: 2011, address: "Gandhinagar"},
        {name: "Nine", salary: 2000, bdate: 1981, address: "Jamnagar"}]
    }
  }
 

  
  render(){
    return(<>
     {this.state.data.filter((user)=>{
     return <h1> {user}</h1>
     })}
    
    </>)
  }
}

export default App;

