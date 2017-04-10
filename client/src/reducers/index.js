import { combineReducers } from 'redux';
import links from './links';

const rootReducer = combineReducers({
  links,
  errors: null,
});

export default rootReducer;
