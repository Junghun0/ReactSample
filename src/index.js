import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';
import './index.css';
import './index.css';
export { default as Home } from './pages/Home';
export { default as About } from './pages/About';
export { default as SignIn} from './components/SignIn';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

