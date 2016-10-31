import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 8) == '_SUCCESS';
}


export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
  if (action.type == types.BEGIN_AJAX_CALL){
    console.log(state);
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)){
    console.log('loaded');
    return state - 1;
  }
  console.log(state);
  return state;
}
