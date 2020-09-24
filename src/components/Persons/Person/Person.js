import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import PropTypes from 'prop-types';


class Person extends Component {
    componentDidMount() {
        this.input_element.focus(); // only works in class based components
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                
                <p key="i2">{this.props.children}</p>

                <input 
                    key="i3"
                    ref={(input_el) => {this.input_element = input_el}}
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