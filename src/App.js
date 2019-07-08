import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={SignIn} />
          <Route path="/Home" component={Home} />
      </div>
    );
  }
}

export default App;
