import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import Thunk from 'redux-thunk'
import { reduxFirestore, getFireStore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer, compose(applyMiddleware(
    Thunk.withExtraArgument({
        getFireStore,
        getFirebase
    })),
    reduxFirestore(),
    reactReduxFirebase()
))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
