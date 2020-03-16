//In this page we are maintaining the Class based component
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state ={
    persons:[
      {name:'Rajeev', age:34},
      {name:'Rupal', age: 31}
    ]
  }

  SwitchNameHandler = ()=>{
    this.setState({
      persons: [
        {name:'Rajeev Ranjan', age:35},
        {name:'Rupal Rawat', age: 32}
      ]
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Iám a React Application</h1>
        <p>This is working for me</p>
        <button onClick={this.SwitchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Dancing</Person>
      </div>
    );

    // return(
    //   React.createElement('div', {className='App'}, 
    //   React.createElement('h1', null, 'Does this work?'));
    // );
  }
}

export default App;