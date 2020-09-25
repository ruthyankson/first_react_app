import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    // constructor(props) {
    //     super(props);
    //     this.input_element = React.createRef();
    // }

    // static context hook is for class-based components
    static contextType = AuthContext;

    componentDidMount() {        
        this.input_element.focus(); // only works in class based components
        //this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                    {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
                
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                
                <p key="i2">{this.props.children}</p>

                <input 
                    key="i3"
                    ref={(input_el) => {this.input_element = input_el}}
                    //ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.person);