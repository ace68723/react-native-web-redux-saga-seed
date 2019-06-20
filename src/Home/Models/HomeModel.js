import { put, takeEvery } from 'redux-saga/effects'

function* fetchData (action) {
  try {
    console.log('here fetch')
  } catch (e) {
  }
}

export const HomeModelEffects = [
  takeEvery('HomeModel/fetch', fetchData)
]
