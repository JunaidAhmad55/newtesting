import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let initData = {
    users: {},
    listuser:[],
  
  
}


function userSection(state=initData, action){
    if(action.type==="USER_SIGNUP"){
   console.log(action.data);
    }

    return state;
}


let reducers = combineReducers({ userSection })

let store = createStore(reducers,{}, applyMiddleware(thunk));


export default store;