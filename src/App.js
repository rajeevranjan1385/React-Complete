//In this page we are maintaining the Class based component
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {id:'sdsdf', name: 'Rajeev', age: 34},
      {id:'ddfdf',name: 'Rupal', age: 31},
      {id:'dsdfer',name: 'Shambhavi', age: 2}
    ],
    showPerson: false
  }

  TogglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHandler =(personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  NameChangedHandler = (event, personId)=>{
    const personIndex = this.state.persons.findIndex(per =>{
      return per.id === personId
    })

    const affectedPerson = {
      ...this.state.persons[personIndex]
    };
    affectedPerson.name = event.target.value;

    const changedPersons = [...this.state.persons];
    changedPersons[personIndex] = affectedPerson;

    this.setState({
      persons: changedPersons
    })
  }
  render(){
    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person name={person.name} age={person.age} key={person.id}
              Click={() => this.deletePersonHandler(index)}
              Changed={(event) =>{this.NameChangedHandler(event, person.id)}}/>
            );
          })
          }
        </div>
      );
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return(
      <div className="App">
        <h1>React Application</h1>
        <p className={classes.join(' ')}>This is working for me</p>
        <button onClick={this.TogglePersonHandler}>Toggle Persons</button>
        {person}
      </div>
    );
  }
}

export default App;