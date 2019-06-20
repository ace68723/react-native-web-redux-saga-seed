import "regenerator-runtime/runtime"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import effects from './effects'
import reducers from './reducers'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(effects)

export default store
