import React, { Component } from 'react';
import './App.css';
import Hello from './Hello'

class App extends Component {
  constructor(){
    super()
    this.state = {name: "world"}
    //this.handleChange = this.handleChange.bind(this)
    // same as the handle change function below
  }


  handleChange = (e) => {
      this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name}/>
        <input name="name" type="text" onChange={this.handleChange} />
      </div>
    )
  }
}

export default App;


function(e) { // do something }
(e) => { // do something }
