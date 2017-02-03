/**
 * HappyRedditting
 * A reddit client by Maverick Labs
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './app/components/AppContainer'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './app/reducers'

// configure logger to check that environment is __DEV__ before logging.
// predicate prop runs a __DEV__ check everytime before logging.
const loggerMiddleware = createLogger({ predicate : (getState, action) => __DEV__ });

//configure the store to add -
  // thunk to make async actions
  // logger to log initialState, action and nextState
const configureStore = (initialState) => {
  const middlewares = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducers, initialState, middlewares);
}

const store = configureStore({});

const App = () =>  (
    <Provider store={store}>
      <AppContainer />
    </Provider>
)

AppRegistry.registerComponent('HappyRedditting', () => App);
