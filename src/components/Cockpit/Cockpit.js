import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    // let classes = ['red', 'bold'].join(' ');
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request... when component is rendered for 1st time
        //const timer = 
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); // array for the function to watch and get executed...

    // when you have an operation which should be canceled after the 
    // component is re-rendered.
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });
    const assigned_classes = [];
    let button_class = '';
    if (props.showPersons) {        
        button_class = classes.red;
    }
    if ( props.personsLength <= 2 ) {
      assigned_classes.push(classes.red); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assigned_classes.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React app</h1>

            <p className={assigned_classes.join(' ')}>This is really lovely!!!!</p>

            <button 
            className={button_class}
            onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit); // great way for getting code optimization
//Every functional component should be wrapped with React.memo