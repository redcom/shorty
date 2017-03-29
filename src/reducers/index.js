import { combineReducers } from 'redux';
import counter from './counter';
import links from './links';

const rootReducer = combineReducers({
  counter,
  links,
});

export default rootReducer;
