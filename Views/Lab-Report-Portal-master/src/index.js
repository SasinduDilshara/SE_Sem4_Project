import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Register from './components/auth/Register';
import Home from './components/layout/Home';
import Admin from './components/layout/adminHome';
import SearchU from './components/layout/searchUser';
import SearchR from './components/layout/searchReport';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/searchreport" component={SearchR} />
            <Route exact path="/searchuser" component={SearchU} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
