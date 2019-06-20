import { put, call  } from 'redux-saga/effects'

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
        yield put({type: 'ProductListModel/initState'});
      } catch (e) {}
    },
  }
}


// reducers:(state={
//   counter: 0
// }, action)=>{
//   switch (action.type) {
//     case `ProductListModel/INCREASE`:
//       return {counter:state.counter+1}
//       break
//   }
//   return state
// },

//
// export const reducer = (state = initialState, action) => {
//     if(action.type === TYPES.LOAD_ATTEMPT){
//         state = {...state, loading: true}
//     }
//
//     if(action.type === TYPES.LOAD_SUCCESS){
//         state = {...state, loading: false, data: action.data}
//     }
//
//     if(action.type === TYPES.LOAD_FAILURE){
//         state = {...state, loading: false, err: action.err}
//     }
//
//     if(Object.values(TYPES).includes(action.type) && action.err){
//         state = {...state, lastErr: action.err}
//     }
//
//     return state
// }
//
//
//
//
//
//
// reducers: {
//     initState(state){
//       return { ...state,
//           title:'',
//           skuList:[],
//           count: 0,
//           categoryId: 0,
//           active: 1,
//       };
//     },
//     save(state,{payload: { skuList, count, categoryId, active, title },}) {
//       return { ...state, skuList, count, categoryId, active, title };
//     },
//   },
