import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  function Hello(props){
    return <h1>Hello, {props.name}</h1>;
  }
  const element = <Hello name="world"/>;
  }
}

export default App;
