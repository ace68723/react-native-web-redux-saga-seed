import { combineReducers } from 'redux'
import ProductListModel  from '../ProductList/Models/ProductListModel'


function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const getReducers = (model) => {
  const initialState = model.state
  const namespace = model.namespace
  const handlers = {}
  Object.values(model.reducers).forEach(reducer => {
    handlers[`${namespace}/${reducer.name}`]=reducer
  })
  return createReducer(initialState,handlers)
}

export default combineReducers({
  ProductListModel:getReducers(ProductListModel)
})
