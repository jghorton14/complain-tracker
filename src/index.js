import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import { saveGoogleUser } from './utils/actions/index'
import { getLocalStorageObject } from './utils/localstorage';
import rootReducer from './utils/reducers/index'
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer)

// Check the local storage, if not logged in, try local storage. if present, then attempt login.

const checkLocalStorageForUserCreds = async (isLoggedIn) => {
  const localStorageObj = getLocalStorageObject();
  if (localStorageObj !== null) {
    store.dispatch(saveGoogleUser(localStorageObj));
  }
}

checkLocalStorageForUserCreds(store.getState().login.isAuth)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
