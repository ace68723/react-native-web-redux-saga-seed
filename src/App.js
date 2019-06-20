import React from 'react';

import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import effects from './effects'
import reducers from './reducers'

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './Home';
import ProductList from './ProductList';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(effects)


let RootStack = createStackNavigator({
  ProductList,
  Home,
});
let Navigation = createAppContainer(RootStack);
export default class App extends React.Component<Props> {
  render() {
    return(
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
