import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer.js';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxStatusReducer
});

export default rootReducer;
