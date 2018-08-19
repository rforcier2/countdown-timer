import React, { Component } from 'react';
import Clock from './clock';
import './App.css';
//import { Form } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline(){
  this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Countdown to {this.state.deadline}</h1>
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <div>
          <input
          placeholder='new date'
          onChange={event=> this.setState({newDeadline: event.target.value})}
          />
          <button onClick={()=>this.changeDeadline()}>
          submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
