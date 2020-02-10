import React, { Component } from 'react';
import { Alert, showAlert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// Imports: Screens
import Counter from './screens/Counter';
// Imports: Redux Persist Persister
import { store, persistor } from './store/store';

export default class App extends Component {
  state = { loggedIn: null };


showAlert(title, body) {
  Alert.alert(
    title, body,
    [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false },
  );
}

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
