import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gugudan from './Gugudan';
import WordRelay from './WordRelay';
import BaseBall from './BaseBall';
import RenderTest from './RenderTest';
import ResponseCheck from './ResponseCheck';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Gugudan/>
        <WordRelay/>
        <BaseBall/>
        <RenderTest/>
        <ResponseCheck/>
      </div>
    );
  }
}

export default App;
