import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fd1', name: 'Len', age: 27 },
      { id: 'fd2', name: 'Mimi', age: 25 },
      { id: 'fd3', name: 'Jerushah', age: 17 } 
    ],
    otherState: 'some other value',
    showPersons: false
  };

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

    this.setState({persons: _persons_});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'white',
      border: '1px solid pink',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          
        </div> 

      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React app</h1>

          <p className={classes.join(' ')}>This is really lovely!!!!</p>

          <button 
            style={style}
            onClick={this.togglePersonsHandler}>
              Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
      
      
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Welllll, here we are...!!!'));
  }
}

export default Radium(App); //higer order component with extra syntax  et al
