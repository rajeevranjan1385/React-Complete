//In this page we will be maintainning Funtion component
import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons:[
      {name:'Rajeev', age:34},
      {name:'Rupal', age: 31}
    ]
  });
const [otherState, setOtherState] = useState('Some other state');

  const SwitchNameHandler = ()=>{
    setPersonsState({
      persons: [
        {name:'Rajeev Ranjan', age:35},
        {name:'Rupal Rawat', age: 32}
      ] //,
      //otherState: personsState.otherState
    })
  }
    return(
      <div className="App">
        <h1>Iám a React Application</h1>
        <p>This is working for me</p>
        <button onClick={SwitchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Dancing</Person>
      </div>
    );
}

export default app;