import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Router from './router'


export default class App extends React.Component<Props> {
  render() {
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
