import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../components/Menu';
import SignIn from '../components/SignIn';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>
                    <Route exact paht="/" component={Home}/>
                    <Switch>
                        <Route path="/about/:name" component={About}/>
                        <Route path="/about" component={About}/>
                        <Route path="/signin" component={SignIn}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;