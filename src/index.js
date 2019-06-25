import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';                 // needed if using firestore (in react-redux-firebase v3^...)
import { ReactReduxFirebaseProvider, } from 'react-redux-firebase';        //needed if using react-redux-firebase v3^...
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReduser'
import App from './App'
import firebase from './config/fbConfig'


const rrfConfig = {                              // needed if using react-redux-firebase v3^...
  userProfile: 'users',
  useFirestoreForProfile: true,                  // Firestore for Profile instead of Realtime DB
}

const store = createStore(rootReducer,
  applyMiddleware(thunk))

const rrfProps = {                                 // needed if using react-redux-firebase v3^...
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,                         // <- needed if using firestore
}

ReactDom.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'));
