import { put, call  } from 'redux-saga/effects'
import * as ProductListService from '../services/ProductListService';

export default{
  namespace: 'ProductListModel',
  state:{
    counter: 0,
    step:0,
  },
  reducers: {
    initState(state){
      return { counter: 0, step:0, }
    },
    increase(state){
      return {...state, counter:state.counter+1}
    },
    decrease(state, action){
      return {...state,counter:state.counter-1}
    },
    addStep(state,action){
      return {...state,step:state.step+1}
    }
  },
  effects:{
    *fetchData (action) {
      try {
        const result =yield call(ProductListService.getWhslSku,{})
        console.log('result',result)
      } catch (e) {
        console.log(e)
      }
    },
  }
}
