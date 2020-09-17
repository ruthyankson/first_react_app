import React from 'react';
import './Person.css';
import Radium, { StyleRoot } from 'radium';



const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.hobbies}</p>
            <input type="text" onChange={props.changed} 
                value={props.name}/>
        </div>
    )

}

export default Radium(person);