import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) =>{
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    }
    return(
        <div className="Person" style={style}>
            <p>My Name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.Changed} />
        </div>
    );
}

export default Radium(person);