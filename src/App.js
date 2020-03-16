//In this page we are maintaining the Class based component
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id:'awawe', name: "Rajeev", age: 34 },
      {id:'ecwe', name: "Rupal", age: 31 },
      {id:'wecwec', name: "Shambhavi", age: 2 }
    ],
    showPersons: false
  };

  NameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;});

    const affectedPerson = {
      ...this.state.persons[personIndex]
    }
    affectedPerson.name = event.target.value;
    const originalPerson = [...this.state.persons];
    originalPerson[personIndex] = affectedPerson;

    this.setState({
      persons: originalPerson
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler =(personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={()=>{this.deletePersonHandler(index)}}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.NameChangeHandler(event, person.id)}/>;
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Iám a React Application</h1>
        <p>This is working for me</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
