import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require('firebase/firestore')

    firebase.initializeApp({
        apiKey: "AIzaSyB7nxsbrGRJJsfpnHxkCQOQpn_WfbEo7XU",
        authDomain: "evernote-clone-393cf.firebaseapp.com",
        databaseURL: "https://evernote-clone-393cf.firebaseio.com",
        projectId: "evernote-clone-393cf",
        storageBucket: "evernote-clone-393cf.appspot.com",
        messagingSenderId: "711497696365",
        appId: "1:711497696365:web:3bd15aa1978854c844ab64"
    });

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
