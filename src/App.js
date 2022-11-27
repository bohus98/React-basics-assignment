import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'Bohus'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});

  }

  render() {
    return (
      <div className="App">
       <UserInput 
       changed ={this.usernameChangeHandler}
       currentName={this.state.username}/>
       <UserOutput userName={this.state.username}/>
       <UserOutput userName="Jano"/>
       <UserOutput userName="Robko"/>
      </div>
    );
  }
}

export default App;
