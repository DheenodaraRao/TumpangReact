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

ReactDOM.render(
    <Router>
        <div>
        <Header />
        <Route exact path="/" component={App}/>
        <Route path="/faq" component={Faq} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
