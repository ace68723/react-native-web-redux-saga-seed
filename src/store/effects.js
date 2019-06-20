import { all, takeEvery } from 'redux-saga/effects'
import ProductListModel from '../ProductList/Models/ProductListModel'


export default function* effects() {
  yield all([
    ...getEffects(ProductListModel),
  ])
}


const getEffects = (model) => {
  const effects = []
  Object.values(model.effects).forEach(effect => {
    effects.push(takeEvery(`${model.namespace}/${effect.name}`, effect))
  })
  return effects
}
