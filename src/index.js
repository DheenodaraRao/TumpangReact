import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,NavLink,
    Link, HashRouter
    // etc.
} from 'react-router-dom';

import App from './App';
import Faq from './components/Faq';
import Login from './components/Login';
import Home from './components/Home';
import RiderHome from './components/RiderHome';

window.ip = "http://192.168.20.211:8080/";

ReactDOM.render(
    <Router>
        <div>
        <Header />
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/riderHome" component={RiderHome} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
