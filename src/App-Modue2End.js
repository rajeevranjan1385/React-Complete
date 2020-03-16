//In this page we are maintaining the Class based component
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state ={
    persons:[
      {name:'Rajeev', age:34},
      {name:'Rupal', age: 31},
      {name:'Shambhavi', age: 2}
    ]
  }

  SwitchNameHandler = (nameNew)=>{
    this.setState({
      persons: [
        {name:nameNew, age:35},
        {name:'Rupal Rawat', age: 32},
        {name:'Shambhavi Ranjan', age: 2}
      ]
    })
  }

  NameChangeHandler = (event) =>{
    this.setState({
      persons:[
        {name: 'Rajeev Ranjan', age: 35},
        {name: 'Rupal Rawat', age: 32},
        {name: event.target.value, age: 2}
      ]
    })
  }

  render(){
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return(
      <div className="App">
        <h1>Iám a React Application</h1>
        <p>This is working for me</p>
        <button style={style}
        onClick={()=>this.SwitchNameHandler('Rajeev Button')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          >
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.SwitchNameHandler.bind(this, 'Rajeev Bind')}
          changed={this.NameChangeHandler}>Hobbies: Dancing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;