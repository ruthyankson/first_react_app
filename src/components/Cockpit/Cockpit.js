import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';



const cockpit = ( props ) => {
    const toggleButtonRef = useRef(null);

    //useContext hook is to functional components
    const auth_context = useContext(AuthContext);
    console.log(auth_context.authenticated);

    // let classes = ['red', 'bold'].join(' ');
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request... when component is rendered for 1st time
        //const timer = 
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        
        toggleButtonRef.current.click();
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
            <h1>{props.title}</h1>

            <p className={assigned_classes.join(' ')}>This is really lovely!!!!</p>

            <button 
            ref={toggleButtonRef}
            className={button_class}
            onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={auth_context.login}>Log in</button>
      
        </div>
    );
};

export default React.memo(cockpit); // great way for getting code optimization
//Every functional component should be wrapped with React.memo