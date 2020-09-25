import React, { Component } from 'react';
import classes from './App.css'; 
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
  }

  state = {
    persons: [
      { id: 'fd1', name: 'Len', age: 27 },
      { id: 'fd2', name: 'Mimi', age: 25 },
      { id: 'fd3', name: 'Jerushah', age: 17 } 
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state)  {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;  
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // switchNameHandler = (new_name) => {
  //  // console.log('clicked');
  //  // DON'T DO THIS: this.state.persons[0].name = 'Mwen';
  //  this.setState({
  //    persons: [
  //     { name: new_name, age: 27 },
  //     { name: 'Mimi', age: 25 },
  //     { name: 'Jerushah', age: 15 } 
  //    ] 
  //   })
  // };

  deletePersonsHandler = (person_index) => {
   // const _persons = this.state.persons.slice();
   //alternative
   const _persons = [...this.state.persons];
    _persons.splice(person_index, 1);
    this.setState({persons: _persons});
  }

  nameChangedHandler = (event, id) => {
    const _person_id = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const _person = {
      ...this.state.persons[_person_id]
    };
    // alternative approach
    // const _person = Object.assign({}, this.state.persons[person_index]);

    _person.name = event.target.value;

    const _persons_ = [...this.state.persons];
    _persons_[_person_id] = _person;

    this.setState((prevState, props) => {
      return {
        persons: _persons_, 
        changeCounter: prevState.changeCounter + 1
      };
    });
  }; // Important for updating states

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'white',
    //   border: '1px solid pink',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    console.log('[App.js] render');

    let persons = null;
    //let button_class = '';

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />
      // style.backgroundColor = 'red';
    }

    
    return (
        <Auxiliary className={classes.App}>
          <button 
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
            Remove Cockpit
          </button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler}}>
            {this.state.showCockpit ? (
            <Cockpit 
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked = {this.togglePersonsHandler}
            login={this.loginHandler}
            />) : null}
            {persons}
          </AuthContext.Provider>
          
        </Auxiliary>     
      
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Welllll, here we are...!!!'));
  }
}

export default withClass(App, classes.App); //higer order component with extra syntax  et al
