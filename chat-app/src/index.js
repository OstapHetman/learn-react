import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/Login';
import SignupComponent from './signup/Signup';
import DashboardComponent from './dashboard/Dashboard';

const firebase = require('firebase')
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyCxEqc2JwSKZyZuOyU5-8dU2FUP4LLr_ME",
    authDomain: "chat-app-b4a7c.firebaseapp.com",
    databaseURL: "https://chat-app-b4a7c.firebaseio.com",
    projectId: "chat-app-b4a7c",
    storageBucket: "chat-app-b4a7c.appspot.com",
    messagingSenderId: "942125287434",
    appId: "1:942125287434:web:ca374ec5446ce887a3b7f3"
});

const routing = (
    <Router>
        <div id="routing-container">
            <Route path="/signin" component={LoginComponent} />
            <Route path="/signup" component={SignupComponent} />
            <Route path="/dashboard" component={DashboardComponent} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
