import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from '@material-ui/core/List';

import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../components/Menu';
import SignIn from '../components/SignIn';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route exact paht="/" component={SignIn} />
                    {/* <Switch> */}
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                    {/* <Route path="/signin" component={SignIn} /> */}
                    <Route path="/Home" component={Home} />
                    {/* </Switch> */}
                </div>

            </div>
        );
    }
}

export default App;