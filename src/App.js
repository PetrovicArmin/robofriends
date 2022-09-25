import logo from './logo.svg';
import './App.css';
import 'tachyons'
import React, { Component } from 'react';
import Hello from './Hello'


class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2 className="f1">{JSON.stringify(this.props.objekat)}</h2>
      <Hello />  
    </div>
    
  );
  }
}

export default App;
