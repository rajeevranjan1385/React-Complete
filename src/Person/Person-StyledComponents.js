import React from 'react';
//import './Person.css';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
    width: 40%;
    margin: 16px auto;
    padding: 16px;
    text-align: center;
    border: 1px solid yellowgreen;
    box-shadow: 0 2px 3px #ccc;

    @media(min-width: 500px){
        width: 450px
    }
`;
const person = (props) =>{
    // const style = {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return(
        <StyledDiv>
            <p>My Name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.Changed} />
        </StyledDiv>
    );
}

export default person;