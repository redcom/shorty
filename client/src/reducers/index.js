import { combineReducers } from 'redux';
import links from './links';
import error from './error';

const rootReducer = combineReducers({
  links,
  error,
});

export default rootReducer;
